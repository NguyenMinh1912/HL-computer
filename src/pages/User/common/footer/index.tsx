const Footer = () => {
    return <>
        <footer>
            <div className="container">
                <div className="newsletter-container d-flex align-items-center">
                    <div className="item-left w-50">
                        <p className="font-600 text-24 m-0"> KÊNH THÔNG TIN</p>
                        <p className="font-300 m-0"> Mời bạn nhập email để nhận thông tin khuyến mãi từ Hoàng Long
                            Computer </p>
                    </div>
                    <div className="item-right w-50">
                        <input type="text" placeholder="Nhập email của bạn ..." id="js-email-newsletter"
                               className="newsletter-input"/>
                        <button className="newsletter-submit"> Đăng ký
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container">
                    <div className="footer-social">
                        <div className="row">
                            <div className="col-3">
                                <p className="font-600 text-18 title"> FANPAGE </p>
                                <div>
                                    <div className="fb-page fb_iframe_widget"
                                         data-href="https://www.facebook.com/Hoang.Long.Computer.94nvt"
                                         data-tabs="timeline" data-width data-height={250} data-small-header="false"
                                         data-adapt-container-width="true" data-hide-cover="false"
                                         data-show-facepile="true" fb-xfbml-state="rendered"
                                         fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=385&height=250&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FHoang.Long.Computer.94nvt&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width=">
                                        <span style={{verticalAlign: 'bottom', width: '340px', height: '250px'}}><iframe
                                            name="f3a07cb4b10d5a" width="1000px" height="250px"
                                            data-testid="fb:page Facebook Social Plugin"
                                            title="fb:page Facebook Social Plugin" frameBorder={0}
                                            scrolling="no"
                                            allow="encrypted-media"
                                            src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df25f7234a96f2a4%26domain%3Dhoanglongcomputer.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fhoanglongcomputer.vn%252Ff163f2f1caae1d%26relation%3Dparent.parent&container_width=385&height=250&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FHoang.Long.Computer.94nvt&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width="
                                            style={{
                                                border: 'none',
                                                visibility: 'visible',
                                                width: '340px',
                                                height: '250px'
                                            }}/></span></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex align-item-center justify-content-between">
                                    <p className="font-600 text-18 title"> YOUTUBE </p>
                                    <a href="https://www.youtube.com/channel/UC6fJEFnTjSMgHp33BUItCrQ" rel="noopener"
                                       target="_blank" className="sprite youtube-sub"/>
                                </div>
                                <div className="footer-youtube-holder video" id="js-footer-youtube"
                                     data-url="https://www.youtube.com/embed/NxfCgU0Jzwc?rel=0&showinfo=0&autoplay=1">
                                    <img data-src="https://img.youtube.com/vi/NxfCgU0Jzwc/hqdefault.jpg"
                                         className="lazy play-youtube-video loaded" alt="video youtube"
                                         src="https://img.youtube.com/vi/NxfCgU0Jzwc/hqdefault.jpg"
                                         data-was-processed="true"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <p className="font-600 text-18 title"> HOTLINE <span className="red">098.236.8008</span>
                                </p>
                                <div className="showroom-address bg-white">
                                    <p>
                                        Kinh doanh 1 <span className="red">Mr. Huy : 0339.69.8008</span>
                                    </p>
                                    <p>
                                        Kinh doanh 2 <span className="red">Mr. Phương : 0386.62.8008</span>
                                    </p>
                                    <p>
                                        Kinh doanh 3 <span className="red">Mr. Tuấn : 0339.38.8008</span>
                                    </p>
                                    <p>
                                        Kinh doanh 4 <span className="red">Mr. Trung : 0386.96.8008</span>
                                    </p>
                                    <p>
                                        Kinh doanh 5 <span className="red">Mr. Nghĩa : 0339.72.8008</span>
                                    </p>
                                    <p>
                                        Trả Góp HDsaison: <span className="red">Mr. Hương : 0904.930.675</span>
                                    </p>
                                    <p>
                                        Hỗ trợ kỹ thuật <span className="red"> 086.552.8008</span>
                                    </p>
                                    <p>
                                        Tra cứu bảo hành <span className="red">Mr. Toán : 0339.73.8008</span>
                                    </p>
                                    <p>
                                        Kế toán <span className="red"> Ms. Huyền : 0963.782.956</span>
                                    </p>
                                    <p>
                                        CSKH <span className="red"> 086.535.8008</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info font-300 clearfix">
                        <div className="item">
                            <a href="/" style={{marginLeft: '75px'}}>
                                <img src="/media/banner/logo_123.png" alt="Hoàng Long Computer"
                                     style={{maxHeight: '90px'}}/>
                            </a>
                            <div className="font-300" style={{whiteSpace: 'pre-line', lineHeight: '1.9'}}>
                                Showroom: Số LK2A-17 Phố Nguyễn Văn Trỗi, Mỗ Lao, Hà Đông, Hà Nội <a
                                href="https://goo.gl/maps/oSdcHbTiBKgGi9rT9" target="_blank" rel="noopener"
                                className="green">[Xem bản đồ]</a>
                                Hotline : <span style={{color: '#0590d8'}}>086.535.8008- 098.236.8008</span>
                                Email : <a
                                href="mailto:hoanglongcomputer94nvt@gmail.com">hoanglongcomputer94nvt@gmail.com</a>
                            </div>
                        </div>
                        <div className="info-item-group">
                            <div className="info-item">
                                <p className="title font-600 text-16"> Thông tin công ty </p>
                                <a href="/gioi-thieu" rel="nofollow">Giới thiệu công ty</a>
                                <a href="/" rel="nofollow">Điều khoản giao dịch</a>
                                <a href="/thong-tin-lien-he" rel="nofollow">Thông tin liên hệ</a>
                            </div>
                            <div className="info-item">
                                <p className="title font-600 text-16"> Quy định &amp; chính sách</p>
                                <a href="/chinh-sach-bao-hanh" rel="nofollow">Chính sách bảo hành</a>
                                <a href="/chinh-sach-doi-tra-hang" rel="nofollow">Chính sách đổi trả hàng</a>
                                <a href="/chinh-sach-van-chuyen" rel="nofollow">Chính sách vận chuyển, giao nhận</a>
                                <a href="/huong-dan-thanh-toan" rel="nofollow">Chính sách thanh toán</a>
                                <a href="/chinh-sach-ban-hang-cho-doanh-nghiep" rel="nofollow">Chính sách cho khách hàng
                                    doanh nghiệp</a>
                                <a href="/chinh-sach-bao-mat-thong-tin" rel="nofollow">Chính sách bảo mật thông tin</a>
                            </div>
                            <div className="info-item">
                                <p className="title font-600 text-16"> Hỗ trợ khách hàng </p>
                                <a href="/huong-dan-mua-hang-online" rel="nofollow">Hướng dẫn mua hàng online </a>
                                <a href="/lien-he" rel="nofollow">Yêu cầu báo giá </a>
                                <a href="/buildpc" rel="nofollow">Xây dựng cấu hình </a>
                                <a href="http://online.gov.vn/Home/WebDetails/76256" target="_blank"><img
                                    src="/static/assets/default/images/icon-bct-2021.png" alt="BCT" width="157px"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <i className="d-block text-center text-13" style={{padding: '6px 0'}}>
                Copyright ©2021 HOANGLONG COMPUTER. Giấy phép kinh doanh: 0108562413 - do sở KH &amp; ĐT TP. Hà Nội
                cấp<br/>
                All rights reserved
            </i>
        </footer>

    </>
}

export {Footer};