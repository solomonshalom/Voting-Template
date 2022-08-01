import Head from "next/head";
import Link from "next/link";
import Layout from "./../components/layout";
export default function Resources() {
  return (
    <>
      <Layout>
        <Head>
          <title>Resources</title>
        </Head>
        <div className="mb-24">
          <h1 className="title-style mb-8">Resources and Links</h1>
          <p>
            21K School maintains a policy document for the official voting
            system to prevennt scam or any error. You can access the entire document{" "}
            <a
              href="#"
              className="cursor-pointer text-blue-600 hover:underline"
              target="_blank"
            >
              here.
            </a>
          </p>
          <br />
          <h3 className="font-medium text-lg mt-8">
            Below are additional links and forms to policy documents/voting form by 21K and the
            Student Body.{" "}
          </h3>
          <br />
          <ul className="ml-6">
            <li className="list-disc">
              <p>
                The official voting form to vote for the student of your choice.{" "}
                <em>
                  (
                  <a
                    href="#"
                    className="cursor-pointer text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Link
                  </a>
                  )
                </em>
              </p>
            </li>
            <li className="list-disc">
              <p>
                Policy and Privacy information or documents/videos related to the canvassing/training can be found through this link{" "}
                <em>
                  (
                  <a
                    href="#"
                    className="cursor-pointer text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Link
                  </a>
                  )
                </em>
              </p>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
