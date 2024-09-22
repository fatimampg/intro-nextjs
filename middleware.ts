import { NextResponse } from 'next/server';

export const middleware = (request) => {
  return NextResponse.redirect(new URL('/', request.url));
}; // redirect to home

export default middleware;

export const config = {
  matcher: ['/docs'],
};
