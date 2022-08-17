const Container = () => {
  return (
    <>
      <div className="container">
        <div className="header-mid d-flex flex-wrap align-items-center">
          <div className="logo text-center">
            <h1 className="m-0">
              <a href="/">
                <img
                  src="/logo_123.png"
                  alt="Hoàng Long Computer"
                  style={{ maxWidth: "108px" }}
                />
              </a>
            </h1>
          </div>
          <div className="header-search">
            <div className="box-search">
              <form
                method="get"
                action="/tim"
                name="search"
                className="d-flex flex-wrap"
              >
                <div className="search-select-container">
                  <input type="hidden" name="scat_id" id="js-scat-id" />
                  <select id="js-select-cat">
                    <option data-id>Tất cả danh mục</option>
                    <option data-id={12}>PC GAMING - ĐỒ HỌA-GIẢ LẬP NOX</option>
                    <option data-id={22}>BỘ MÁY TÍNH CHƠI GAME</option>
                    <option data-id={31}>PC VĂN PHÒNG - GAME NHẸ</option>
                    <option data-id={37}>CPU - BỘ VI XỬ LÝ</option>
                    <option data-id={34}>MAINBOARD - BO MẠCH CHỦ</option>
                    <option data-id={44}>RAM - BỘ NHỚ TRONG</option>
                    <option data-id={47}>VGA - CARD ĐỒ HỌA</option>
                    <option data-id={50}>Ổ CỨNG SSD - HDD</option>
                    <option data-id={66}>PSU - NGUỒN MÁY TÍNH</option>
                    <option data-id={144}>VỎ CASE</option>
                    <option data-id={5}>MÀN HÌNH MÁY TÍNH</option>
                    <option data-id={60}>TẢN NHIỆT - COOLING</option>
                    <option data-id={53}>PHÍM CHUỘT - GAMING GEAR</option>
                    <option data-id={67}>THIẾT BỊ MẠNG - MÁY IN</option>
                  </select>
                </div>
                <input
                  type="text"
                  id="js-seach-input"
                  name="q"
                  placeholder="Nhập nội dung tìm kiếm ..."
                  autoComplete="off"
                  className="text-search"
                />
                <button type="submit" className="btn-search">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
            <div
              className="autocomplete-suggestions js-box-result is-actie-scroll"
              id="js-seach-result"
            >
              {" "}
            </div>
            <div className="tag-search">
              <a href="/man-hinh-may-tinh">Màn Hình</a>
              <a href="/pc-gaming-intel">PC Gaming</a>
              <a href="/cpu-bo-vi-xu-ly">CPU</a>
            </div>
          </div>
          <div className="header-mid-right-group justify-content-around">
            <a
              href="javascript:void(0);"
              className="hotline-header-group clearfix"
            >
              <i className="sprite icon-phone" />
              <span className="hotline-text text-12">
                Hotline
                <br /> mua hàng
              </span>
              <span
                className="font-500 green text-16 text-center"
                style={{ marginTop: "42px" }}
              >
                098.236.8008
              </span>
            </a>
            <a
              href="javascript:void(0);"
              className="hotline-header-group clearfix"
            >
              <i className="sprite icon-phone" />
              <span className="hotline-text text-12 red">
                Hotline
                <br /> kỹ thuật
              </span>
              <span
                className="font-500 green text-16 text-center"
                style={{ marginTop: "42px" }}
              >
                086.552.8008
              </span>
            </a>
            <a href="/buildpc">
              <i className="sprite icon-buildpc" />
              <span>Xây dựng cấu hình</span>
            </a>
            <a
              href="/san-pham-xa-hang"
              target="_blank"
              className="header-xa-hang"
            >
              {" "}
              <i
                className="d-block fa fa-tags green text-center"
                style={{ fontSize: "32px", lineHeight: "40px" }}
              />{" "}
              <span>Khuyến mại</span>{" "}
            </a>
            {/* <a href="/tra_gop_hd">
              <i class="sprite icon-tragop"></i>
              <span>Trả góp</span>
          </a>*/}
            <a href="/cart" className="position-relative">
              <i className="sprite icon-cart" />
              <span>Giỏ hàng</span>
              <span className="cart-count js-cart-count">0</span>
            </a>
          </div>
        </div>
        <div className="header-bottom d-flex flex-wrap">
          <div className="header-menu d-flex">
            <a href="/" className="menu-logo" style={{ display: "none" }}>
              <img src="/media/banner/logo_123.png" alt="Hoàng Long Computer" />
            </a>
            <a href="javascript:void(0)" className="title">
              DANH MỤC SẢN PHẨM{" "}
            </a>
            <div className="menu-container">
              <div className="item">
                <a href="/pc-gaming-intel">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_12_1618893680.png)",
                    }}
                  />
                  <span className="cat-title">
                    PC GAMING - ĐỒ HỌA-GIẢ LẬP NOX
                  </span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/pc-gaming-intel-the-he-10x" className="cat-2">
                      {" "}
                      PC Intel Gen 10-11{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/pc-gaming-do-hoa-intel-12" className="cat-2">
                      {" "}
                      PC Intel Gen 12{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/intel-xeon-gia-lap-android" className="cat-2">
                      {" "}
                      PC GIẢ LẬP-XEON{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a
                      href="/pc-gaming-core-i7-i9-the-he-10xx"
                      className="cat-2"
                    >
                      {" "}
                      PC AMD{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/bo-may-tinh-choi-game">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_22_1618893741.png)",
                    }}
                  />
                  <span className="cat-title">BỘ MÁY TÍNH CHƠI GAME</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/bo-pc-gaming-intel-the-he-10x" className="cat-2">
                      {" "}
                      Thế Hệ Gen 10{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/bo-pc-gaming-intel-the-he-9x" className="cat-2">
                      {" "}
                      Thế Hệ GEN 12{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/case-van-phong-pc-game-nhe">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_31_1618893779.png)",
                    }}
                  />
                  <span className="cat-title">PC VĂN PHÒNG - GAME NHẸ</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/pc-dong-bo-dell" className="cat-2">
                      {" "}
                      PC Đồng Bộ Dell{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/pc-van-phong" className="cat-2">
                      {" "}
                      PC Văn Phòng{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/bo-pc-van-phong" className="cat-2">
                      {" "}
                      Bộ PC Văn Phòng{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/cpu-bo-vi-xu-ly">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_37_1618893828.png)",
                    }}
                  />
                  <span className="cat-title">CPU - BỘ VI XỬ LÝ</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/cpu-intel" className="cat-2">
                      {" "}
                      CPU - INTEL{" "}
                    </a>
                    <a href="/intel-pentium"> Intel Pentium </a>
                    <a href="/intel-core-i3"> Intel Core I3 </a>
                    <a href="/intel-core-i5"> Intel Core I5 </a>
                    <a href="/intel-core-i7"> Intel Core I7 </a>
                    <a href="/intel-core-i9"> Intel Core I9 </a>
                    <a href="/intel-xeon"> Intel Xeon </a>
                  </div>
                  <div className="sub-item">
                    <a href="/cpu-amd-ryzen" className="cat-2">
                      {" "}
                      CPU - AMD RYZEN{" "}
                    </a>
                    <a href="/ryzen-3"> Ryzen 3 </a>
                    <a href="/ryzen-5"> Ryzen 5 </a>
                    <a href="/ryzen-7"> Ryzen 7 </a>
                    <a href="/ryzen-9"> Ryzen 9 </a>
                  </div>
                  <div className="sub-item">
                    <a href="/cpu-theo-socket" className="cat-2">
                      {" "}
                      CPU Theo Socket{" "}
                    </a>
                    <a href="/amd-4"> AMD 4 </a>
                    <a href="/intel-lga-1151-v2"> Intel LGA 1200 </a>
                    <a href="/intel-lga-1151-v2"> Intel LGA 1151 V2 </a>
                    <a href="/intel-lga-1151"> Intel LGA 1151 </a>
                    <a href="/intel-lga-2011"> Intel LGA 2011 </a>
                    <a href="/intel-lga-2011-v3"> Intel LGA 2011 V3 </a>
                    <a href="/intel-lga-2066"> Intel LGA 2066 </a>
                    <a href="/intel-lga-1150"> Intel LGA 1150 </a>
                    <a href="/intel-lga-1700-1"> Intel LGA 1700 </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/mainboard-bo-mach-chu">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_34_1618893917.png)",
                    }}
                  />
                  <span className="cat-title">MAINBOARD - BO MẠCH CHỦ</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/mainboard-intel" className="cat-2">
                      {" "}
                      Mainboard Intel{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/mainboard-amd" className="cat-2">
                      {" "}
                      Mainboard AMD{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/socket-ho-tro" className="cat-2">
                      {" "}
                      Socket Hỗ Trợ{" "}
                    </a>
                    <a href="/intel-lga-1200"> Intel LGA 1200 </a>
                    <a href="/intel-lga-1151-v2"> Intel LGA 1151 V2 </a>
                    <a href="/amd-4"> AMD 4 </a>
                    <a href="/intel-lga-1151"> Intel LGA 1150 </a>
                    <a href="/intel-lga-2011-v3"> Intel LGA 2011 V3 </a>
                    <a href="/intel-lga-2066"> Intel LGA 2066 </a>
                    <a href="/intel-lga-2011"> Intel LGA 2011 </a>
                    <a href="/intel-lga-1700"> Intel LGA 1700 </a>
                  </div>
                  <div className="sub-item">
                    <a href="/chipset" className="cat-2">
                      {" "}
                      CHIPSET{" "}
                    </a>
                    <a href="/intel-x299"> Intel X299 </a>
                    <a href="/intel-x99-x299"> Intel X79-X99 </a>
                    <a href="/amd-x470-x570"> AMD X470- X570 </a>
                    <a href="/amd-a320-b450"> AMD A320-B450 </a>
                    <a href="/z690"> Z690 </a>
                    <a href="/b660"> B660 </a>
                    <a href="/h610"> H610 </a>
                    <a href="/intel-z590-1"> Intel Z590 </a>
                    <a href="/intel-b560"> Intel B560 </a>
                    <a href="/h510"> H510 </a>
                    <a href="/intel-z490-z590"> Intel Z490 </a>
                    <a href="/intel-b460-b560"> Intel B460 </a>
                    <a href="/intel-h410-b460"> Intel H410-H470 </a>
                    <a href="/intel-h110"> Intel H310/B365/Z390 </a>
                    <a href="/h81"> Intel H81 </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/ram-bo-nho-trong">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_44_1618893850.png)",
                    }}
                  />
                  <span className="cat-title">RAM - BỘ NHỚ TRONG</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/loai-ram" className="cat-2">
                      {" "}
                      RAM DDR5{" "}
                    </a>
                    <a href="/drr4"> 8G </a>
                    <a href="/drr3"> 16G </a>
                    <a href="/drr5"> 32G </a>
                  </div>
                  <div className="sub-item">
                    <a href="/dung-luong-ram" className="cat-2">
                      {" "}
                      RAM DDR4{" "}
                    </a>
                    <a href="/ram-8g"> Ram 8G </a>
                    <a href="/ram-16g"> Ram 16G </a>
                    <a href="/ram-32g"> Ram 32G </a>
                  </div>
                  <div className="sub-item">
                    <a href="/ram-ecc" className="cat-2">
                      {" "}
                      RAM DDR3{" "}
                    </a>
                    <a href="/ram-ecc-16g"> RAM 8G </a>
                    <a href="/ram-32g"> RAM 16G </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/vga-card-do-hoa">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_47_1618893898.png)",
                    }}
                  />
                  <span className="cat-title">VGA - CARD ĐỒ HỌA</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/vga-card-do-hoa-moi" className="cat-2">
                      {" "}
                      VGA NVIDIA{" "}
                    </a>
                    <a href="/nvidia-gt-710-750-ti-1030">
                      {" "}
                      NVIDIA GT 710-1030{" "}
                    </a>
                    <a href="/nvidia-gtx-1050-1050-ti-4g">
                      {" "}
                      NVIDIA 1050 TI 4G{" "}
                    </a>
                    <a href="/nvidia-gtx-1650-1650-super-4g">
                      {" "}
                      NVIDIA GTX 1650--1650 Super 4G{" "}
                    </a>
                    <a href="/nvidia-gtx-1660-1660-super-6g">
                      {" "}
                      NVIDIA GTX 1660--1660 Super 6G{" "}
                    </a>
                    <a href="/nvidia-quadro"> Nvidia Quadro </a>
                    <a href="/rtx-2060-2060-super-8g"> NVIDIA RTX 2060 </a>
                    <a href="/nvidia-rtx-3050"> NVIDIA RTX 3050 </a>
                    <a href="/rtx-3060"> RTX 3060 </a>
                    <a href="/nvidia-rtx-3060-ti-3060-12g">
                      {" "}
                      NVIDIA RTX 3060 TI{" "}
                    </a>
                    <a href="/nvidia-rtx-3070-3080-10g"> NVIDIA RTX 3070 </a>
                    <a href="/rtx-3070ti"> RTX 3070TI </a>
                    <a href="/nvidia-rtx-3080-3090"> NVIDIA RTX 3080 </a>
                    <a href="/rtx-3080ti"> RTX 3080TI </a>
                    <a href="/gtx-1060-6g"> NVIDIA GTX 1060 3G </a>
                  </div>
                  <div className="sub-item">
                    <a href="/nvidia-rtx-2060-2060-super-8g" className="cat-2">
                      {" "}
                      VRAM VGA{" "}
                    </a>
                    <a href="/1-2g"> 1- 2G </a>
                    <a href="/3g"> 3G </a>
                    <a href="/4g"> 4G </a>
                    <a href="/5g"> 5G </a>
                    <a href="/6g"> 6G </a>
                    <a href="/8g"> 8G </a>
                    <a href="/10g-tro-len"> 10G </a>
                    <a href="/12g"> 12G </a>
                    <a href="/16g"> 16G </a>
                    <a href="/24g"> 24G </a>
                  </div>
                  <div className="sub-item">
                    <a href="/vga-card-do-hoa-2nd" className="cat-2">
                      {" "}
                      VGA AMD{" "}
                    </a>
                    <a href="/amd-rx-6500-xt"> AMD RX 6500 XT </a>
                    <a href="/amd-rx-6400-xt"> AMD RX 6400 XT </a>
                    <a href="/rx-6600xt"> AMD RX 6600XT </a>
                    <a href="/amd-rx-6600"> AMD RX 6600 </a>
                    <a href="/amd-rx-6500"> AMD RX 6500 </a>
                    <a href="/amd-rx-560"> AMD RX 560 </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/o-cung-hdd-ssd">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_50_1618893935.png)",
                    }}
                  />
                  <span className="cat-title">Ổ CỨNG SSD - HDD</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/o-cung-theo-hang" className="cat-2">
                      {" "}
                      ổ cứng theo hãng{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/o-cung-hdd" className="cat-2">
                      {" "}
                      Ổ CỨNG HDD{" "}
                    </a>
                    <a href="/500g"> 500G </a>
                    <a href="/1-tb"> 1 TB </a>
                    <a href="/2-tb"> 2 TB </a>
                    <a href="/3tb-tro-len"> 3TB Trở Lên </a>
                  </div>
                  <div className="sub-item">
                    <a href="/o-cung-ssd" className="cat-2">
                      {" "}
                      Ổ CỨNG SSD{" "}
                    </a>
                    <a href="/120-180g"> 120-180G </a>
                    <a href="/240-256g"> 240-256G </a>
                    <a href="/480-512g"> 500G </a>
                    <a href="/1-tb-2tb"> 1 Tb </a>
                    <a href="/2-tb-1"> 2 Tb </a>
                    <a href="/3-tb"> 3 Tb </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/psu-nguon-may-tinh">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_66_1618893803.png)",
                    }}
                  />
                  <span className="cat-title">PSU - NGUỒN MÁY TÍNH</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/chuan-nguon" className="cat-2">
                      {" "}
                      CHUẨN NGUỒN{" "}
                    </a>
                    <a href="/80-plus-platinum"> 80 Plus Platinum </a>
                    <a href="/80-plus-white"> 80 Plus White </a>
                    <a href="/80-plus-gold"> 80 Plus Gold </a>
                    <a href="/80-plus-bronze"> 80 Plus Bronze </a>
                  </div>
                  <div className="sub-item">
                    <a href="/cong-suat" className="cat-2">
                      {" "}
                      CÔNG SUẤT{" "}
                    </a>
                    <a href="/duoi-400w"> Dưới 400W </a>
                    <a href="/400w-550w"> 400W- 550W </a>
                    <a href="/600w-tro-len"> 600W- 650W </a>
                    <a href="/1000w-tro-len"> 700W Trở lên </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/vo-case">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_144_1618893879.png)",
                    }}
                  />
                  <span className="cat-title">VỎ CASE</span>
                </a>
              </div>
              <div className="item">
                <a href="/man-hinh-may-tinh">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_5_1618894003.png)",
                    }}
                  />
                  <span className="cat-title">MÀN HÌNH MÁY TÍNH</span>
                </a>
                <div className="sub-menu-container">
                  {/* màn hình máy tính */}
                  <div className="sub-item">
                    <a className="cat-2"> THƯƠNG HIỆU MÀN HÌNH </a>
                    <a href="/man-hinh-may-tinh?brand=66"> AOC </a>
                    <a href="/man-hinh-may-tinh?brand=8"> Asus</a>
                    <a href="/man-hinh-may-tinh?brand=68"> BJX </a>
                    <a href="/man-hinh-may-tinh?brand=17"> Dell </a>
                    <a href="/man-hinh-may-tinh?brand=71"> KingView </a>
                    <a href="/man-hinh-may-tinh?brand=36"> LG </a>
                    <a href="/man-hinh-may-tinh?brand=38"> MSI </a>
                    <a href="/man-hinh-may-tinh?brand=72"> Philips </a>
                    <a href="/man-hinh-may-tinh?brand=61"> Samsung </a>
                    <a href="/man-hinh-may-tinh?brand=56"> Skyview </a>
                    <a href="/man-hinh-may-tinh?brand=67"> Viewsonic </a>
                    <a href="/man-hinh-may-tinh?brand=70"> Starview </a>
                  </div>
                  {/*<div class="sub-item">
    <a class="cat-2"> Box Title 2 </a>
    
    <a href=""> Item Title </a>
    <a href=""> Item Title </a>
    <a href=""> Item Title </a>
    <a href=""> Item Title </a>
</div> */}
                  <div className="sub-item">
                    <a href="/tan-so-man-hinh" className="cat-2">
                      {" "}
                      TẦN SỐ MÀN HÌNH{" "}
                    </a>
                    <a href="/tan-so-140-280hz"> TẦN SỐ 140- 280HZ </a>
                    <a href="/tan-so-60-75-hz"> TẦN SỐ 60-75 Hz </a>
                  </div>
                  <div className="sub-item">
                    <a href="/kich-thuoc-man-hinh" className="cat-2">
                      {" "}
                      KÍCH THƯỚC MÀN HÌNH{" "}
                    </a>
                    <a href="/man-27-32-inch"> MÀN 27-32 INCH </a>
                    <a href="/man-18-22-inch"> MÀN 18-22 INCH </a>
                    <a href="/man-23-24-inch"> MÀN 23-24 INCH </a>
                  </div>
                  <div className="sub-item">
                    <a href="/nhu-cau-su-dung" className="cat-2">
                      {" "}
                      Bề mặt ( Cong, Phẳng ){" "}
                    </a>
                    <a href="/cong"> Cong </a>
                    <a href="/phang"> Phẳng </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/tan-nhiet-cooling">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_60_1618894042.png)",
                    }}
                  />
                  <span className="cat-title">TẢN NHIỆT - COOLING</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/tan-nhiet-khi-cpu" className="cat-2">
                      {" "}
                      Tản Nhiệt Khí Cho CPU{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a
                      href="/tan-nhiet-nuoc-all-in-one-custom"
                      className="cat-2"
                    >
                      {" "}
                      Tản Nhiệt Nước All In One - Custom{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/phu-kien-do-mod-case-led-rgb" className="cat-2">
                      {" "}
                      Quạt Tản Nhiệt{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/cac-san-pham-modding" className="cat-2">
                      {" "}
                      Các Sản Phẩm Modding{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/phim-chuot-gaming-gear">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_53_1618894021.png)",
                    }}
                  />
                  <span className="cat-title">PHÍM CHUỘT - GAMING GEAR</span>
                </a>
                <div className="sub-menu-container">
                  <div className="sub-item">
                    <a href="/ban-phim-choi-game" className="cat-2">
                      {" "}
                      Bàn Phím Chơi Game{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/chuot-choi-game" className="cat-2">
                      {" "}
                      Chuột Chơi Game{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/bo-ban-phim-chuot" className="cat-2">
                      {" "}
                      Bộ Bàn Phím + Chuột{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/ban-di-chuot" className="cat-2">
                      {" "}
                      Bàn Di Chuột{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/tai-nghe-choi-game" className="cat-2">
                      {" "}
                      Tai Nghe Chơi Game{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/ban-ghe-game" className="cat-2">
                      {" "}
                      Bàn Chơi Game{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/webcam" className="cat-2">
                      {" "}
                      Webcam{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/loa-vi-tinh" className="cat-2">
                      {" "}
                      Loa Vi Tính{" "}
                    </a>
                  </div>
                  <div className="sub-item">
                    <a href="/ghe-game" className="cat-2">
                      {" "}
                      Ghế Game{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <a href="/thiet-bi-mang-may-in">
                  <i
                    className="cat-thumb"
                    style={{
                      backgroundImage:
                        "url(/media/category/cat_icon_67_1618893983.png)",
                    }}
                  />
                  <span className="cat-title">THIẾT BỊ MẠNG - MÁY IN</span>
                </a>
              </div>
            </div>
          </div>
          <div className="header-social h-100 clearfix">
            <div>
              <a href="https://hoanglongcomputer.vn/khach-hang-tin-dung">
                {" "}
                VIDEO FEEDBACK KHÁCH HÀNG{" "}
              </a>
              <a href="https://csvanchuyen.hoanglongcomputer.vn/">
                {" "}
                MIỄN PHÍ VẬN CHUYỂN{" "}
              </a>
              <a href="https://csdoitra.hoanglongcomputer.vn/">
                {" "}
                ĐỔI TRẢ TRONG 3 NGÀY
              </a>
              <a href="https://cstragop.hoanglongcomputer.vn/"> TRẢ GÓP 0%</a>
              <a href="https://www.facebook.com/baohanhhlc/">
                {" "}
                HỖ TRỢ KỸ THUẬT-BẢO HÀNH{" "}
              </a>
            </div>

            <div> asdfasdfjhsdf</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Container };
