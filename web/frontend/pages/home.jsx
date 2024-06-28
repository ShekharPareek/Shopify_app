import { useState } from "react";
import { useAppQuery } from "../hooks";
import { useNavigate } from "react-router-dom";
import {
    PageActions
  } from "@shopify/polaris";

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


      const handleLogout = () => {
        localStorage.clear();
        const navigate = useNavigate();

      useEffect(() => {
        if (accessToken) {
          navigate("/");
        }
      });
      };
    
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
                        <span  style={{fontSize:"18px",fontWeight:"700",color:"#163758",Align:"center"}}>0</span>
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
                            <h4>Total Orders</h4>
                        </div>
                    </div>
                    <div className="synced-main-detail ">
                        <span className="" style={{fontSize:"18px",fontWeight:"700",color:"#163758",Align:"center"}}>{isorderLoadingCount ? "-" : ordersdata.count}</span>
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
                    <span  style={{fontSize:"18px",fontWeight:"700",color:"#163758",Align:"center"}}>0</span>
                    </div>
                </div>
            </div>
        </div>
        <PageActions primaryAction={{ content: "Logout", onClick:handleLogout,}} />
    </div>
</section>

  )
}

export default home
