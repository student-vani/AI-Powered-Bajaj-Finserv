const gcd = (a,b)=>b===0?a:gcd(b,a%b);
exports.hcfArray = arr => arr.reduce(gcd);
const lcm=(a,b)=>(a*b)/gcd(a,b);
exports.lcmArray = arr => arr.reduce(lcm);
exports.fibonacci = n => {
  let a=0,b=1,res=[];
  for(let i=0;i<n;i++){res.push(a);[a,b]=[b,a+b];}
  return res;
};
exports.isPrime = n => {
  if(n<2) return false;
  for(let i=2;i*i<=n;i++) if(n%i===0) return false;
  return true;
};