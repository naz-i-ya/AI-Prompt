import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
// import { signIn } from "next-auth/react";

const handle = NextAuth({
    providers:[
        GoogleProvider({
            clientId: '564291491681-gu7bt9cu00rs337882ohrmv64nalfkit.apps.googleusercontent.com',
            clientSecret: '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',
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})