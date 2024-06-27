import React from 'react'

function orders() {
  return (
   
<div className="awp-number-sec-main">
    <div className="container-fluid">
        <div className="row bg-white mt-5 rounded inputs">
            <div className="col-lg-2 col-md-2">
                <label htmlFor="awb">AWB Number </label>
                <input type="text" className="form-control" id="awb" placeholder="Enter AWB Number" value="" name="awb" />
            </div>
            <div className="col-md-2 col-lg-2">
                <label htmlFor="ref_nu">Reference Number </label>
                <input type="text" className="form-control" id="ref_nu" placeholder="Enter Reference Number" value="" name="ref_nu" />
            </div>
            <div className="col-md-2 col-lg-2 search_selected">
                <label htmlFor="awb_status">Status </label>
                <select className="form-control select2 select2-hidden-accessible" id="awb_status" name="awb_status" data-live-search="true" tabIndex="-1" aria-hidden="true">
                    <option value=""> All </option>
                    <option value="on_hold"> On – Hold </option>
                    <option value="softdata_upload"> Pickup Scheduled </option>
                    <option value="pickup_awaited"> Pickup Awaited </option>
                    <option value="assigned_to_hub"> Assigned to Hub </option>
                    <option value="not_picked_up"> Not Picked Up </option>
                    <option value="cancelled"> Cancelled </option>
                    <option value="pickup_completed"> Pickup Completed </option>
                    <option value="inscan_at_hub"> Inscan At Hub </option>
                    <option value="outfordelivery"> Out For Delivery </option>
                    <option value="delivered"> Delivered </option>
                    <option value="undelivered"> Undelivered </option>
                    <option value="reachedathub"> Reached At Hub </option>
                    <option value="shelved"> shelved </option>
                    <option value="rto"> RTO </option>
                    <option value="rto_delivered"> RTO Delivered </option>
                    <option value="rescheduled"> In-Transit </option>
                    <option value="request_rejected"> Pickup Cancelled </option>
                    <option value="request_accepted"> Pending For Pickup </option>
                    <option value="awaiting_handover"> Ready For Pickup </option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: "192.656px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-awb_status-container"><span className="select2-selection__rendered" id="select2-awb_status-container" role="textbox" aria-readonly="true" title=" All "> All </span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            </div>
            <div className="col-md-2 col-lg-2">
                <label htmlFor="from">Pickup Date From </label>
                <input type="date" className="form-control" id="from" value="2024-03-01" name="from" required="" />
            </div>
            <div className="col-md-2 col-lg-2">
                <label htmlFor="to">Pickup Date To </label>
                <input type="date" className="form-control" id="to" value="2024-03-27" name="to" required="" />
            </div>
            <div className="col-lg-2 col-md-2 mt-1">
                <button type="submit" className="btn btn-dark-blue px-5 searchbtn ">Search</button>
            </div>
        </div>

        <form action="#" id="generate_shipment_label">
            <div className="table-responsive your_order_table">
                <div id="myTable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div className="row order-main">
                        <div className="col-sm-12">
                            <table className="table table-striped dataTable no-footer" id="myTable">
                                <thead>
                                    <tr className="btn-dark-blue">
                                        <th className="text-left no-sort sorting_disabled" data-card-title="" rowspan="1" colspan="1" aria-label="" style={{ width: "18.6719px" }}><input type="checkbox" id="select_all" /></th>
                                        <th scope="col" data-card-subtitle8="" className="sorting sorting_asc" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Sr.No.: activate to sort column descending" style={{ width: "56.5px" }}>Sr.No.</th>
                                        <th scope="col" data-card-subtitle1="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="AWB No: activate to sort column ascending" style={{ width: "86.5938px" }}>AWB No</th>
                                        <th scope="col" data-card-subtitle2="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Cust. Ref.: activate to sort column ascending" style={{ width: "83.3906px" }}>Cust. Ref.</th>
                                        <th scope="col" data-card-subtitle3="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Pickup Date: activate to sort column ascending" style={{ width: "103.766px" }}>Pickup Date</th>
                                        <th scope="col" data-card-subtitle4="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Paid Amount: activate to sort column ascending" style={{ width: "109.562px" }}>Paid Amount</th>
                                        <th scope="col" data-card-subtitle5="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Attempt Count: activate to sort column ascending" style={{ width: "129.125px" }}>Attempt Count</th>
                                        <th scope="col" data-card-subtitle6="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{ width: "145.375px" }}>Status</th>
                                        <th scope="col" data-card-subtitle7="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Updated On: activate to sort column ascending" style={{ width: "107.281px" }}>Updated On</th>
                                        <th scope="col" data-card-footer="" className="sorting" tabIndex="0" aria-controls="myTable" rowspan="1" colspan="1" aria-label="Action : activate to sort column ascending" style={{ width: "112.734px" }}>Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="tr_8141" className="odd">
                                        <td className="text-center">
                                            <input type="checkbox" name="check_list[]" value="JB4048157" className="checkbox" />
                                        </td>
                                        <td className="text-left sorting_1">1</td>
                                        <td className="text-left"><a href="tracking.html">JB4048157</a></td>
                                        <td className="text-left"></td>

                                        <td className="text-left">23-Mar-24</td>
                                        <td className="text-left">15.21</td>
                                        <td className="text-left">0</td>
                                        <td className="text-left">
                                            <p> Pending </p>
                                        </td>
                                        <td className="text-left">22-Mar-24</td>
                                        <td className="text-left">
                                            <a href="#" className="btn btn-sm btn-outline-success">
                                                <i className="fa fa-print" aria-hidden="true"></i>
                                            </a>

                                            <a href="#" className="btn btn-sm btn-outline-danger cancelled"><i className="fa fa-times" aria-hidden="true"></i></a>


                                        </td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                            </div>
<div className="col-sm-12 col-md-12">
    <div className="dataTables_paginate paging_simple_numbers" id="myTable_paginate">
        <ul className="pagination">
            <li className="paginate_button page-item previous disabled" id="myTable_previous"><a
                    aria-controls="myTable" aria-disabled="true" aria-role="link"
                    data-dt-idx="previous" tabindex="0" className="page-link">Previous</a></li>
            <li className="paginate_button page-item active"><a href="#" aria-controls="myTable"
                    aria-role="link" aria-current="page" data-dt-idx="0" tabindex="0"
                    className="page-link">1</a></li>
            <li className="paginate_button page-item "><a href="#" aria-controls="myTable"
                    aria-role="link" data-dt-idx="1" tabindex="0" className="page-link">2</a>
            </li>
            <li className="paginate_button page-item "><a href="#" aria-controls="myTable"
                    aria-role="link" data-dt-idx="2" tabindex="0" className="page-link">3</a>
            </li>
            <li className="paginate_button page-item "><a href="#" aria-controls="myTable"
                    aria-role="link" data-dt-idx="3" tabindex="0" className="page-link">4</a>
            </li>
            <li className="paginate_button page-item "><a href="#" aria-controls="myTable"
                    aria-role="link" data-dt-idx="4" tabindex="0" className="page-link">5</a>
            </li>
            <li className="paginate_button page-item disabled" id="myTable_ellipsis"><a
                    aria-controls="myTable" aria-disabled="true" aria-role="link"
                    data-dt-idx="ellipsis" tabindex="0" className="page-link">…</a></li>
            <li className="paginate_button page-item "><a href="#" aria-controls="myTable"
                    aria-role="link" data-dt-idx="26" tabindex="0" className="page-link">27</a>
            </li>
            <li className="paginate_button page-item next" id="myTable_next"><a href="#"
                    aria-controls="myTable" aria-role="link" data-dt-idx="next" tabindex="0"
                    className="page-link">Next</a></li>
        </ul>
    </div>
</div>
</div>
<div className="row pagination-sec">
     <div className="col-sm-12 col-md-5"></div> 

</div>
</div>
</div>
</form>
</div>
</div>

  )
}

export default orders
