//@flow
[].map(x => x**x);

function a(b: string) {}

const c = {};

// This would produce an error after running `npm run flow-watch`.
c::a(123);
