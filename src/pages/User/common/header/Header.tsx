
const Header = () =>{
    return <>
        <div className="header-top bg-green font-300 text-white">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="item-left">
                    <div className="showroom-container position-relative d-inline-block" style={{background: '#047039', borderRadius: '20px', padding: '0 15px', lineHeight: '29px'}}>
                        <a href="" className="bg-icon m-0 icon-zalo">Liên hệ</a>
                        <div className="showroom-address bg-white" style={{zIndex: 99}}>
                            {/*-<p>0339.72.8008<span class="red">Kinh doanh 1: Mr. Nghĩa </span></p>
                        <p>0904.930.675 <span class="red">Trả Góp HDsaison: Ms. Hương </span></p>
                        <p>0339.69.8008 <span class="red">Kinh doanh 2: Mr. Huy </span></p>
                        <p>086.552.8008 <span class="red">Hỗ trợ kỹ thuật</span></p>
                        <p>0339.38.8008  <span class="red">Kinh doanh 3: Mr. Tuấn </span></p>
                        <p>0339.73.8008 <span class="red">Tra cứu bảo hành</span></p>
                        <p>0386.96.8008 <span class="red">Kinh doanh 4: Mr. Trung </span></p>
                        <p>086.535.8008 <span class="red">CSKH</span></p>
                        <p>0963.782.956 <span class="red">Kế toán</span></p>-*/}
                            <style dangerouslySetInnerHTML={{__html: "\n.box-sale-group {display: flex;flex-wrap: wrap;position: absolute;top: 0;background: #fff;left: 0;right: 0;justify-content: space-between;background: #f8f9fa;padding: 23px 23px 0 23px;border-radius: 12px;box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);z-index: 6;}\n.box-sale-group .box-item {\n    padding-right: 10px;\n    width: calc(100% / 3);\n    font-weight: lighter;\n    color: #5d5d5d;\n}\n.box-sale-group .title {\n    background: #0d699e;\n    color: #fff;\n    font-weight: bold;\n    border-radius: 0 30px 30px 0;\n    height: 29px;\n    line-height: 29px;\n    white-space: nowrap;\n    font-size: 12px;\n}\n.box-sale-group .number {\n    background: #eb1f27;\n    text-align: center;\n    display: inline-block;\n    width: 29px;\n    margin-right: 11px;\n    height: 100%;\n}\n.box-sale-group b {\n    display: inline-block;\n    height: 100%;\n}\n.box-sale-group .box-list {\n    font-size: 13px;\n}\n.box-sale-group a {\n    display: block;\n    color: #222;\n}\n.box-list span {\n    margin-right: 5px;\n}\n.blue-light {\n    color: #31c6fe;\n}\n.box-list p {\n    margin: 0 0 16px 0;\n    display: inline-block;\n}\n.box-item{padding-right:10px;width:calc(100% / 3);font-weight:lighter;color:#5d5d5d;}\n.box-item:last-child{padding-right:0;}\n.box-list{font-size:13px;}\n.box-list span{margin-right:5px;}\n.box-list p{margin:0 0 16px 0;display:inline-block;}\n.header-main-container{background:#ececec;padding:8px 0 15px 0;}\n" }} />
                            <div className="box-sale-group">
                                {/* 1. HOTLINE TƯ VẤN SẢN PHẨM */}
                                <div className="box-item">
                                    <p className="title">
                                        <span className="number">01</span>
                                        <b>KHÁCH HÀNG CÁ NHÂN</b>
                                    </p>
                                    <div className="box-list">
                                        <a href="https://zalo.me/0339388008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0339.72.8008</span> -  Mr. Nghĩa
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/339698008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0339.69.8008</span> - Mr. Huy
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0339728008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0339.38.8008</span> - Mr. Tuấn
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0.86.96.8008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0386.96.8008</span> - Mr. Trung
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                {/* 2. KHÁCH HÀNG DOANH NGHIỆP */}
                                <div className="box-item">
                                    <p className="title">
                                        <span className="number">02</span>
                                        <b>KHÁCH HÀNG DOANH NGHIỆP</b>
                                    </p>
                                    <div className="box-list">
                                        <a href="https://zalo.me/0339388008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0339.38.8008</span> - Mr. Tuấn
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0386968008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0339.72.8008</span> - Mr. Nghĩa
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0339698008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b">0339.69.8008</span> - Mr. Huy
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                {/* 3. HOTLINE TƯ VẤN BẢO HÀNH */}
                                <div className="box-item">
                                    <p className="title">
                                        <span className="number">03</span>
                                        <b>HỖ TRỢ KĨ THUẬT, BẢO HÀNH - TRẢ GÓP</b>
                                    </p>
                                    <div className="box-list">
                                        <a href="https://zalo.me/0865528008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b"> 0904.930.675 </span> - Trả Góp HDsaigon
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0963782956" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b"> 086.552.8008 </span> - Hotline kĩ thuật
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0339738008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b"> 0339.73.8008 </span> - Tra cứu bảo hành
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0904930675" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b"> 0963.782.956 </span> - Kế toán
                                            </p>
                                        </a>
                                        <a href="https://zalo.me/0865358008" target="_blank" rel="noreferrer">
                                            <span className="blue-light"> <i className="fa fa-commenting" /> Zalo </span>
                                            <p>
                                                <span className="font-600 red-b"> 086.535.8008 </span> - CSKH
                                            </p>
                                        </a>
                                    </div>
                                    {/*<p class="title">
          <span class="number">04</span>
          <b>CHĂM SÓC KHÁCH HÀNG</b>
      </p>
 	<div class="box-list">
        <a href="https://zalo.me/0989360308" target="_blank" rel="noreferrer">
            <span class="blue-light"> <i class="fa fa-commenting"></i> Zalo </span>

            <p>
            Hotline(24/7): <span class="font-600 red-b"></span> -
            </p>
        </a>
    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="header-bg-linear"><i className="fa fa-headphones" /> Mua hàng <b style={{fontSize: '14px'}}>098.236.8008</b> </a>
                    <a href="javascript:void(0)" className="header-bg-linear"><i className="fa fa-headphones" /> Mua hàng <b style={{fontSize: '14px'}}>0339.38.8008</b> </a>
                    {/* <a href="/chinh-sach-bao-hanh" class="bg-icon icon-tool">Chính Sách Bảo Hành</a>
                <a href="/tin-tuc" class="bg-icon icon-ticket">Tin tức khuyến mại</a>
                <a href="/lien-he" class="bg-icon icon-news">Yêu cầu báo giá</a>
                <a href="" class="bg-icon icon-tuyendung">Tuyển dụng</a> */}
                </div>
                <div>
                    <a href="javascript:void(0)" className="header-bg-linear right"><i className="fa fa-headphones" /> Kỹ thuật <b style={{fontSize: '14px'}}>086.552.8008</b> </a>
                    <a href="javascript:void(0)" className="header-bg-linear right"><i className="fa fa-headphones" /> Bảo hành <b style={{fontSize: '14px'}}>0339.73.8008</b> </a>
                    <a href="/tin-tuc" className="bg-icon icon-news mr-3">Tin tức</a>
                    <div className="item-right bg-icon d-inline-block">
                        <a href="/dang-ky">Đăng ký </a> |
                        <a href="/dang-nhap"> Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export {Header};