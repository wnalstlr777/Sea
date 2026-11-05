import dashboard from './admin.html';

export function adminPage(){
  const nonce=crypto.randomUUID();
  return new Response(dashboard.replaceAll('__NONCE__',nonce),{headers:{
    'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store',
    'Content-Security-Policy':`default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; connect-src 'self'; img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'; form-action 'self'`,
    'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','X-Frame-Options':'DENY'
  }});
}
export async function adminAuthorized(request,password){
  if(typeof password!=='string'||!password)return false;
  const header=request.headers.get('Authorization')||'';
  if(header.length>8192)return false;
  let candidate;
  if(header.startsWith('Basic ')){
    try{
      const decoded=new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(atob(header.slice(6)),c=>c.charCodeAt(0)));
      if(!decoded.startsWith('admin:'))return false;candidate=decoded.slice(6);
    }catch{return false;}
  }else if(header.startsWith('Bearer '))candidate=header.slice(7);
  else return false;
  const encode=value=>new TextEncoder().encode(value);
  const [expected,supplied]=await Promise.all([password,candidate].map(value=>crypto.subtle.digest('SHA-256',encode(value))));
  const a=new Uint8Array(expected),b=new Uint8Array(supplied);let different=0;
  for(let i=0;i<a.length;i++)different|=a[i]^b[i];
  return different===0;
}
