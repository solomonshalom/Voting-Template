import Head from "next/head";
import Layout from "./../components/layout";
import React, { useEffect, useState } from "react";

export default function Faqs() {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  });
  return (
    <>
      <Layout>
        <Head>
          <title>FAQs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1 className="title-style">Frequently Asked Questions</h1>
          <div className="mt-12 mb-48">
            <button class="accordion">
              How many days will the form be open for votes?
            </button>
            <div class="panel">
              <div>
                <p>
                  It would be open for about 3 days, starting from the launch of the form itself. 
                </p>
              </div>
            </div>

            <button class="accordion">
              Who do I ask help?
            </button>
            <div class="panel">
            <p>
                Any student, faculty, staff member or a service provider who is
                associated with 21K may contact us through the portal @ Solomon Shalon Lijo / Zaid Ajani.
              </p>
              <br />
              <p>
                Questions lodged through the portal below will be manually
                redirected to the respective body or if possible, will be answered by us.{" "}
              </p>
            </div>

            <button class="accordion">
              Are my votes anonymous to the public?
            </button>
            <div class="panel">
              <p>
                Yes, all votes will be anonymous and every information regarding your vote will be confidential 
              </p>
            </div>

            <button class="accordion">
              Will the name of the canidates who will be chosen, would be known to the public?
            </button>
            <div class="panel">
              <p>
                Yes. The official announcement will be happening and the students who are selected will be called out
                in the said event.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
