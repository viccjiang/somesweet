<template >
  <div class="container-fluid g-0 ">
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
      <div class="filters" style="
                                                              height: 200px;
                                                              background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678266182222.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ly1lQwUT0i8McpHti3b%2B0N%2FhZ3A6WDBd%2FxW1SFhHNZqU8z%2BoIgsYXRyV0PBTWHu0euG4Hu5Q9qEP%2FtThiw%2BnOUrBTEapX%2BVzUk%2F6ieSGh2mfacO7609ZmcI2wrn9nGQPb%2FKTa%2FMuFVRm%2Fx1KE7YgIhIj3lyMjYqlox%2Fd0dHAvTkYd2NMbMbmq5hcnv3LYUY%2BzedJBPklgv3EQ9R66ceT5JFEYxR0viTVTGkSsPPUZaWqP5L4A8a51nHiE5MNhGe7phKRRwHQ00cYIv1zZcC7d5BYhTtEiJr02z0WyUMpSX7UZw%2FT87nGv1tvPDeHWmIH%2B5dq4Kr%2F5%2FgbejqUwi21cQ%3D%3D);
                                                              background-size: cover;
                                                              background-position: center center;
                                                              background-attachment: fixed;
                                                            " />
      <div class="
                                                              card-img-overlay
                                                              d-flex
                                                              flex-column
                                                              justify-content-center
                                                              align-item-center
                                                            ">
        <h1 class="fs-3 card-title text-center fw-bold">
          <p class="fs-m fw-bold mb-2">所有甜點</p>
          <p class="logoText fs-sm p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>
        </h1>
      </div>
    </div>
  </div>
  <div class="container mt-10 mb-10">
    <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
      <!-- 1 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            營業時間
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <p>營業時間：
              週一至週五：上午10:00至晚上9:00
              週六、週日及國定假日：上午9:00至晚上10:00

              備註：

              營業時間可能因特殊節慶或活動而異動，請留意店內公告。
              如有任何問題或需求，歡迎聯繫我們的客服人員。</p>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            訂購方式
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            <p>線上訂購：可透過官方網站或社群平台進行線上訂購，並選擇取貨或宅配服務。
              臨櫃購買：可前往 somesweet 甜點店實體店面，直接購買甜點並帶回家品嚐。
              電話預訂：可透過電話與店家聯繫，預訂心儀的甜點後，親自前往店面取貨。
              以上是 somesweet 甜點店的訂購方式，您可根據需求選擇適合自己的方式進行訂購。</p>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree">
            甜點選擇
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
            <p>法式甜點：如馬卡龍、泡芙、千層蛋糕等。會不定期推出新款式，讓顧客總是能有新的驚喜。</p>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingfore">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapsefore" aria-expanded="false"
            aria-controls="panelsStayOpen-collapsefore">
            價格
          </button>
        </h2>
        <div id="panelsStayOpen-collapsefore" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingfore">
          <div class="accordion-body">
            <p>依照目前官網售價販售</p>
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingfive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false"
            aria-controls="panelsStayOpen-collapsefive">
            配送
          </button>
        </h2>
        <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingfive">
          <div class="accordion-body">
            <p>宅配服務：甜點店可透過物流合作夥伴提供宅配服務，將甜點送到客戶指定地址。
              到店自取：客戶可前往甜點店實體店面自行取貨，避免運送過程中的意外狀況，並可以即時享用甜點。
              代收取貨：客戶可委託親友或代收服務機構代為收取甜點，再由他們轉交客戶。
              以上是甜點的配送方式，顧客可以依照個人需求選擇合適的方式。需要注意的是，在使用宅配服務時，請確認收件人地址與聯繫方式正確無誤，以免產生運送上的問題。</p>
          </div>
        </div>
      </div>
      <!-- 6 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingsix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapsesix" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix">
            特殊要求或疑問
          </button>
        </h2>
        <div id="panelsStayOpen-collapsesix" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingsix">
          <div class="accordion-body">
            <p>清晨一點甜 Some Sweet Bakery 甜點店的工作人員將會協助解答。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
