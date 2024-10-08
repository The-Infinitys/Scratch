const add_comment_link = () => {
  const link_svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
  <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
  <!-- Edited by The Infinity's -->
  <desc>Created with Sketch.</desc>
  <defs/>
  <g stroke-width="1" stroke="#855cd6" fill="none" fill-rule="evenodd">
    <path d="M5.8303376,18.0021888 C4.84870996,18.0021888 3.86840883,17.6294356 3.12024939,16.8812761 C1.62658354,15.3876103 1.62658354,12.9574186 3.12024939,11.4637527 L5.93380646,8.65019566 C6.32247795,8.26152418 6.95257677,8.26152418 7.34124826,8.65019566 C7.72991975,9.03886715 7.72991975,9.66896597 7.34124826,10.0576375 L4.52769119,12.8711945 C3.81004179,13.5888439 3.81004179,14.7575114 4.52769119,15.4751608 C5.24401406,16.1914837 6.41268157,16.1941368 7.13165749,15.4751608 L9.94521457,12.6629303 C10.3338861,12.2742588 10.9626584,12.2742588 11.3513298,12.6629303 C11.7400013,13.0516018 11.7400013,13.6803741 11.3513298,14.0690456 L8.53909929,16.8812761 C7.79226637,17.6294356 6.81063872,18.0021888 5.8303376,18.0021888 Z M13.3644624,11.64416 C13.1110964,11.64416 12.8550773,11.5473237 12.6614048,11.3523247 C12.2727333,10.9636532 12.2727333,10.3348809 12.6614048,9.94620946 L15.4736353,7.13265238 C16.1912847,6.41500298 16.1912847,5.24633548 15.4736353,4.52868608 C14.7559859,3.81103668 13.5873184,3.81103668 12.869669,4.52868608 L10.056112,7.34224315 C9.66744047,7.73091464 9.03734165,7.73091464 8.64867016,7.34224315 C8.25999867,6.95357167 8.25999867,6.32347284 8.64867016,5.93480135 L11.4622272,3.12124428 C12.9545666,1.62625191 15.3874113,1.62625191 16.8797506,3.12124428 C18.3734165,4.61491013 18.3734165,7.04510181 16.8797506,8.53876766 L14.0675201,11.3523247 C13.8738476,11.5473237 13.619155,11.64416 13.3644624,11.64416 Z M8.06619354,12.9318167 C7.81150096,12.9318167 7.55680838,12.8349804 7.3631359,12.6399814 C6.97446442,12.2513099 6.97446442,11.6225376 7.3631359,11.2338662 L11.427605,7.16807057 C11.8162764,6.77939908 12.4463753,6.77939908 12.8350468,7.16807057 C13.2237182,7.55674206 13.2237182,8.18684088 12.8350468,8.57551237 L8.76925118,12.6399814 C8.5755787,12.8349804 8.32088612,12.9318167 8.06619354,12.9318167 Z" id="link-icon-1" fill="#FFFFFF"/>
  </g>
</svg>
`;
  const remove_links = () => {
    document.querySelectorAll("span.inf-link").forEach((elem) => elem.remove());
  };
  const add_link_buttons = (elems, old = false) => {
    const copyToClip = (text) => {
      navigator.clipboard.writeText(text).then(
        () => {
          console.log("copied," + text);
        },
        () => {
          console.error("failed to copy");
        }
      );
    };
    elems.forEach((elem) => {
      if (elem.id != "") {
        const cp_bt = document.createElement("span");
        cp_bt.innerHTML = link_svg;
        cp_bt.addEventListener("click", () =>
          copyToClip(window.location.href + "#" + elem.id)
        );
        if (old) {
          cp_bt.className = "actions inf-link";
          document.querySelector(`#${elem.id}>div.actions-wrap`).prepend(cp_bt);
        } else {
          cp_bt.className = "inf-link";
          document
            .querySelector(
              "#" + elem.id + ">div>div.flex-row.comment-top-row>div"
            )
            .append(cp_bt);
        }
      }
    });
  };
  const now_lc_url = new URL(window.location.href);
  if (now_lc_url.pathname.startsWith("/users/")) {
    setInterval(() => {
      remove_links();
      add_link_buttons(
        document.querySelectorAll("ul.comments>li.top-level-reply>div"),
        (old = true)
      ); // 投稿
      add_link_buttons(
        document.querySelectorAll(
          "ul.comments>li.top-level-reply>ul.replies>li.reply>div"
        ),
        (old = true)
      ); // 返信
    }, 1000);
  } else if (
    now_lc_url.pathname.startsWith("/projects/") ||
    (now_lc_url.pathname.startsWith("/studios/") &&
      now_lc_url.pathname.endsWith("/comments"))
  ) {
    setInterval(() => {
      remove_links();
      add_link_buttons(
        document.querySelectorAll("div.flex-row.comment"),
        (old = false)
      );
    }, 1000);
  }
};
add_comment_link();
