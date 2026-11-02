import * as THREE from 'three';
import {VISUAL_DECK_Y} from './ship.js';

// Single bow searchlight; uses the ship's active visual transform in overview mode.
export function createBowSearchlight(ship, lighting) {
  const lamp = new THREE.SpotLight('#fff0ce', 0, 175, Math.PI / 5.8, .72, 1.4);
  lamp.castShadow = false;
  lamp.visible = false;
  const target = new THREE.Object3D();
  ship.add(lamp, target);
  lamp.target = target;

  // A visible luminous source (no extra real-time lights).
  const bulb = new THREE.Sprite(new THREE.SpriteMaterial({
    color: '#fff0d0', transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true
  }));
  bulb.scale.set(3.8, 3.8, 1);
  ship.add(bulb);

  // Soft spotlight footprint on the sea. OceanSurface uses a custom shader
  // and cannot receive Three.js SpotLight lighting automatically.
  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(85, 85),
    new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, depthTest: true,
      blending: THREE.AdditiveBlending,
      uniforms: { glow: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main() {
        vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }`,
      fragmentShader: `varying vec2 vUv; uniform float glow; void main() {
        vec2 p=(vUv-.5)*2.;
        float falloff=exp(-dot(p,p)*6.0);
        gl_FragColor=vec4(vec3(1.,.88,.65),glow*falloff*.32);
      }`
    })
  );
  pool.rotation.x = -Math.PI / 2;
  pool.renderOrder = 1;
  pool.visible = false;
  ship.add(pool);

  const start = new THREE.Vector3();
  const end = new THREE.Vector3();
  const localStart = new THREE.Vector3();
  const localEnd = new THREE.Vector3();
  const temp = new THREE.Vector3();
  let configured = false;
  let intensity = 0;
  function update(dt) {
    const boat = ship.userData.model;
    if (!boat) return;
    boat.updateWorldMatrix(true, false);
    const overview = ship.userData.overviewDisplay?.visible ?? false;
    const overviewBoat = ship.userData.overviewDisplay?.children[0];
    if (overview && overviewBoat) overviewBoat.updateWorldMatrix(true, false);

    if (!configured) {
      // Determine the forward end from the actual imported hull bounds.
      const bounds = new THREE.Box3().setFromObject(boat);
      const bowZ = bounds.min.z + 5;
      start.set(0, VISUAL_DECK_Y + 3, bowZ);
      end.set(0, 0, bowZ - 75);
      localStart.copy(boat.worldToLocal(start.clone()));
      localEnd.copy(boat.worldToLocal(end.clone()));
      configured = true;
    }
    const visual = overview && overviewBoat ? overviewBoat : boat;
    temp.copy(localStart);
    visual.localToWorld(temp);
    lamp.position.copy(temp);
    bulb.position.copy(temp);
    temp.copy(localEnd);
    visual.localToWorld(temp);
    target.position.copy(temp);
    target.updateMatrixWorld();
    pool.position.set(temp.x, .38, temp.z + 9);

    // Match the existing smoothed daylight rather than switching at a fixed hour.
    const daylight = lighting?.uniforms?.daylight?.value ?? window.oceanCruise?.lighting?.uniforms?.daylight?.value ?? 1;
    const desired = 1 - THREE.MathUtils.smoothstep(daylight, .13, .53);
    const blend = 1 - Math.exp(-Math.min(dt || 0, .1) * 1.7);
    intensity += (desired - intensity) * blend;
    lamp.intensity = intensity * 190;
    lamp.visible = intensity > .002;
    bulb.material.opacity = intensity * .8;
    bulb.visible = intensity > .002;
    pool.material.uniforms.glow.value = intensity;
    pool.visible = intensity > .002;
  }
  return { update };
}
