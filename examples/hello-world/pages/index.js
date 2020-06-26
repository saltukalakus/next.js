import { useRouter } from 'next/router'

function RedirectPage({ ctx }) {
  const router = useRouter()
}

RedirectPage.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, {
      'Vary': 'Accept',
      'Access-Control-Allow-Origin': 'https://next-js-hello.vercel.app',
      'Content-Type': 'text/html; charset=utf-8',
      Location: 'auth0.samples.Auth0Sample://ticket-00456618.us.auth0.com/ios/auth0.samples.Auth0Sample/callback'
    });
    ctx.res.end(body);
  }
  return {};
}

export default RedirectPage
