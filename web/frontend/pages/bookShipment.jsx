import React from "react";
import { useState } from "react";
import { useAppQuery } from "../hooks";
function BookShipment() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState({ data: [] });

  const { data} = useAppQuery({
    url: "/api/orders/all",
    reactQueryOptions: {
      onSuccess: (data) => {
        console.log("Logg Here", data);
        setIsLoading(false);
        setOrderData(data);
      },
      onError: (error) => {
        console.log("Logg Here", error);
      },
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="book-shipment-sec-min ">
        <div className="container-fluid">
          <div className="row bg-white mt-5 rounded inputs shadow p-3 mb-5 bg-body rounded">
            <div className="col-md-3 col-lg-3">
              <label for="select_btn">Order Id</label>
              <select id="select_btn" className="form-select">
                {orderData.data.map((order) => (
                  <option value={order.id}>{order.id}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3 col-lg-3 pb-3 pl-3">
              <label htmlFor="service_type">Service Type</label>
              <select
                className="form-select"
                id="service_type"
                name="service_type"
              >
                <option value="Next Day Delivery">Next Day Delivery</option>
                <option value="Same Day Delivery">Same Day Delivery</option>
              </select>
            </div>
            <div className="col-md-3 col-lg-3">
              <label htmlFor="courier_type">Courier Type</label>
              <select
                className="form-select"
                id="courier_type"
                name="courier_type"
              >
                <option value="Document">Document</option>
                <option value="Non-Document">Non-Document</option>
              </select>
            </div>
            <div className="col-md-3 col-lg-3">
              <label htmlFor="consignment">Consignment</label>
              <select
                className="form-select"
                id="consignment"
                name="consignment"
              >
                <option value="Forward">Forward</option>
                <option value="Reverse">Reverse</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row g-2percent">
            <div className="col-md-6 mb-5 w-49">
              <div className="picup-location">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Pickup Location</h4>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="pickup_name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pickup_name"
                      name="pickup_name"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="pickup_phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pickup_phone"
                      name="pickup_phone"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="pickup_email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="pickup_email"
                      name="pickup_email"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="pickup_house_number">House Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pickup_house_number"
                      name="pickup_house_number"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="pickup_building">Building</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pickup_building"
                      name="pickup_building"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="pickup_area">Area</label>
                    <select
                      className="form-select"
                      id="pickup_area"
                      name="pickup_area"
                    >
                      <option value="" selected>
                        Area
                      </option>
                      <option value="1"></option>
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label htmlFor="pickup_landmark">Landmark</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pickup_landmark"
                      name="pickup_landmark"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label htmlFor="pickup_city">City</label>
                    <select
                      className="form-select"
                      id="pickup_city"
                      name="pickup_city"
                    >
                      <option value="" selected>
                        City
                      </option>
                      <option value="1"></option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  mb-5  w-49">
              <div className="picup-location">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Drop Location</h4>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="drop_name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="drop_name"
                      name="drop_name"
                    />
                  </div>
                  <div className="col-md4 col-lg-4">
                    <label htmlFor="drop_phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="drop_phone"
                      name="drop_phone"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="drop_email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="drop_email"
                      name="drop_email"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="drop_house_number">House Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="drop_house_number"
                      name="drop_house_number"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="drop_building">Building</label>
                    <input
                      type="text"
                      className="form-control"
                      id="drop_building"
                      name="drop_building"
                    />
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <label htmlFor="drop_area">Area</label>
                    <select
                      className="form-select"
                      id="drop_area"
                      name="drop_area"
                    >
                      <option value="" selected>
                        Area
                      </option>
                      <option value="1"></option>
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label htmlFor="drop_landmark">Landmark</label>
                    <input
                      type="text"
                      className="form-control"
                      id="drop_landmark"
                      name="drop_landmark"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label htmlFor="drop_city">City</label>
                    <select
                      className="form-select"
                      id="drop_city"
                      name="drop_city"
                    >
                      <option value="" selected>
                        City
                      </option>
                      <option value="1"></option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
               <div className="row  g-2percent">
            <div className="col-md-6 mb-5 w-49">
                <div className="picup-location">
                  <div className="row">
                      <div className="col-md-4 col-lg-4">
                          <label for="from">Pickup Date</label>
                    <input type="date" className="form-control" id="from" value="" name="from"/>
                      </div> 
                      <div className="col-md-4 col-lg-4">
                          <label for="ref_nu">Item Weight</label>
                          <input type="text" className="form-control" id="ref_nu" value="" name="ref_nu"/>
                      </div>
  
                      <div className="col-md-4 col-lg-4">
                          <label for="from">Number of Pieces</label>
                          <select className="form-select" aria-label="Default select example">
                              <option selected="">1</option>
                              <option value="1">2</option>
                              <option value="2">3</option>
                              <option value="3">4</option>
                              <option value="4">5</option>
                              <option value="5">6</option>
                              <option value="6">7</option>
                              <option value="7">8</option>
                            </select>
                            
                      </div>
                      <div className="col-md-6 col-lg-6 radio-sec-payment-type">
                          <label for="ref_nu">Order Payment Type</label>
                          <div className="main-check-btn-payment">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                  Prepaid 
                                </label>
                              </div>
                              <div class="form-check ">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked=""/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                  COD
                                </label>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <label for="ref_nu">COD Amount</label>
                        <input type="text" className="form-control" id="ref_nu" value="" name="ref_nu"/>
                    </div>
                  </div>
                  </div>
          </div>
         <div className="col-md-6 mb-5 w-49">
        <div className="picup-location">
       <div className="row">
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Special Instructions</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
       </div>
        </div>
         </div>
         <div className="col-md-12">
            <div className="text-center submit_btn mb-4">
          <button type="button" className="btn btn-dark-blue px-5" style={{color:"#fff",background:"#041f40"}}>Submit</button>
            </div>
          </div>
         </div>
            
        </div>
      </section>
    </>
  );
}

export default BookShipment;
