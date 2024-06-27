import { useState } from "react";
import { useAppQuery } from "../hooks";


function home() {
    const [isLoading, setIsLoading] = useState(true);
    const {
        data: ordersdata = { count: 0 },
        isLoading: isorderLoadingCount,
      } = useAppQuery({
        url: "/api/orders/count",
        reactQueryOptions: {
          onSuccess: () => {
            setIsLoading(false);
          },
        },
      });


    const cardStyle = {
        backgroundColor: 'var(--p-color-bg-fill-emphasis-hover)',
      };
    
  return (
    <section className="manage-address-main-sec">
    <div className="container">
        <h1 style={{fontSize:"20px"}} className="mb-5">Welcome Back</h1>
        <div className="row manage-add">
            {/* <!------------ add address start -------------> */}
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="synced-main-sec-main-bar">
                    <div className="synced-main-sec">
                        <div className="icon-synced">
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </div>
                        <div className="text-synced">
                            <h4>Synced Orders</h4>
                        </div>
                    </div>
                    <div className="synced-main-detail">
                        <h2>0</h2>
                    </div>
                </div>
            </div>
            {/* <!------------ add address end ------------->
            <!------------ card 1 start -------------> */}
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="synced-main-sec-main-bar">
                    <div className="synced-main-sec">
                        <div className="icon-synced">
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div className="text-synced">
                            <h4>Shopify Orders</h4>
                        </div>
                    </div>
                    <div className="synced-main-detail">
                        <span style={{fontSize:"22px",fontWeight:"700",color:"#163758"}}>{isorderLoadingCount ? "-" : ordersdata.count}</span>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div className="synced-main-sec-main-bar">
                    <div className="synced-main-sec">
                        <div className="icon-synced">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                        <div className="text-synced">
                            <h4>Order In Transit</h4>
                        </div>
                    </div>
                    <div className="synced-main-detail">
                        <h2>9720</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default home
