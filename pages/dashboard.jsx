import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const dashboard = ({ data }) => {
    // const { status } = useSession();
    // const router = useRouter();

    // useEffect(() => {
    //     if (status !== 'authenticated') {
    //         router.replace("/")
    //     }
    // }, [status])

    return (
        <>
            <h1>dashboard</h1>
            <h2>email:{data && data}</h2>
        </>
    )
}
export default dashboard



export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: { destination: '/', permanant: false }
        }
    } else {
        return {
            props: {
                data: session.user.email
            }
        }
    }

}