import React from 'react'

function configure() {
  return (
    <section className="configure-main-sec">
  <div className="container">
    <div className="row main-row-sec">
      <div className="col-md-7">
        <div className="row main-configure-sec-row">
          <div className="col-11">
            <div className="text-main-sec-configure">
              <p>Add Tracking URL to Shopify order page and mark it as fulfilled as soon as the order is synced.</p>
            </div>
          </div>
          <div className="col-1">
            <div className="check-bar">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              </div>
            </div>
          </div>
        </div>
        <div className="row main-configure-sec-row">
          <div className="col-8">
            <div className="text-main-sec-configure">
              <p>Default Service Type</p>
            </div>
          </div>
          <div className="col-4">
            <div className="check-bar">
              <div className="form-group">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Next Day Delivery</option>
                  <option value="2">Same Day Delivery</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row main-configure-sec-row">
          <div className="col-8">
            <div className="text-main-sec-configure">
              <p>Default Courier Type</p>
            </div>
          </div>
          <div className="col-4">
            <div className="check-bar">
              <div className="form-group">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Document</option>
                  <option value="2">Non-Document</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row main-configure-sec-row">
          <div className="col-11">
            <div className="text-main-sec-configure">
              <p>Create different pieces for different items in order</p>
            </div>
          </div>
          <div className="col-1">
            <div className="check-bar">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              </div>
            </div>
          </div>
        </div>
        <div className="save-configure">
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default configure
