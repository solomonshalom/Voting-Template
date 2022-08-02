import Head from "next/head";
import Link from "next/link";
import Layout from "./../components/layout";
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>21K School - Voting</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div>
            <div className="mb-12">
              <h1 className="title-style">The Offical Voting Poll</h1>
              <p>
                Welcome to the Official Voting Poll Of 21K! Through this website, you can 
                vote your favorite student who you want to see as part of the student council!
              </p>
              <br />
              <p>
                Note that each position only allow's you to vote once, so choose wisely
              </p>
            </div>
            <div className="mb-12">
              <h1 className="title-style">How Do I Vote?</h1>
              <p>
                To vote the student of your choice, click the link through the button provided below or head over to
                <a href="/resources">resources</a> to find the form where you will be voting.
              </p>
              <br />
              Now, if you need a step-by-step process on voting - please check out the below steps to vote!
              <ul className="list-disc pl-6">
                <li>
                  Click on either the button given below or head over to <a href="/resources">resources</a> to find the link
                  to the google form
                </li>
                <li>
                  Select the students you would like to vote and the position (president, vice-president and CEO of Microsoft/Apple/Amazon or Google).
                  Once your done, the votes will be counted and the student will be selected! if your luckly, the student you voted for might be the one 
                  who could get selected :D
                </li>
              </ul>
            </div>
            <div className="mb-12">
              <h1 className="title-style">Need Assistance?</h1>
              <p>
                Any student, faculty, staff member or a service provider who is
                associated with 21K may contact us through the portal @ Solomon Shalon Lijo / Zaid Ajani.
              </p>
              <br />
              <p>
                Questions lodged through the portal below will be manually
                redirected to the respective body or if possible, will be answered by us.{" "}
              </p>
              <div className="flex flex-col md:flex-row md:items-center mb-48">
                <div className="flex-1 md:flex-initial">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdjx65gvMin2q2p5mhW4Wuw6lVWZDS5I8yHCKZWfRriE0H_Fw/closedform">
                    <button className="flex cursor-pointer bg-black items-center rounded-md mt-4 mr-6 p-3 px-4">
                      <div className="pr-2 text-white font-medium text-sm lg:text-base">
                        Voting Form
                      </div>
                      <div>
                        <img
                          src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=fff"
                          width="22"
                          height="22"
                          alt="right arrow icon"
                        />
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="flex-1 md:flex-initial">
                  <Link
                    href="21kschool.in"
                    target="_blank"
                  >
                    <button className="flex bg-black cursor-pointer items-center rounded-md mt-4 p-3 px-4">
                      <div className="pr-2 text-white text-sm lg:text-base font-medium hover:link-styling">
                        Lodge A Question
                      </div>
                      <div>
                        <img
                          src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=fff"
                          width="22"
                          height="22"
                          alt="right arrow icon"
                        />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
