import { NextResponse } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

export function middleware(req) {
  const auth = req.headers.get("authorization");

  const user = process.env.romaindevun;
  const pass = process.env.123romaindevun;

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const [inputUser, inputPass] = decoded.split(":");
      if (inputUser === user && inputPass === pass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentification requise", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Hub sécurisé"',
    },
  });
}
