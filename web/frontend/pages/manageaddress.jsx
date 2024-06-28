import React from 'react'

function manageaddress() {
  return (
    <section className="manage-address-main-sec">
    <div className="container">    
        <h1 className="text-center mb-5">Saved Pickup Address</h1>
            <div className="row manage-add">
     {/*--------------- add address start-----------------  */}
    
    
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">    
        <a href="add-adress.html" className="card add-address-card text-center">
            <i className="fa fa-plus d-block" aria-hidden="true"></i>
            Add address
        </a>    
    </div>
    {/* ------------ add address end -------------*/}
    {/* ------------ card 1 start ------------- */}
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div className="card card-scroll">
            <div className="card-body">  
                <h6 className="card-subtitle mb-2">Scheduled </h6>            
                
                <p className="card-text">Vishal Maheshwar Number Number Abu Al Abyad Number Abu Dhabi United Arab Emirates</p>
                <p className="mb-0">Phone Number:  9716666309</p>
                <p className="mb-1">Email ID:<br></br> vishalmaheshwar@gmail.com</p>

                <a href="#" className="card-link">Edit</a>|
                <a href="#" data="575" className="card-link delete-data">Remove</a>
                                <span>|  Default </span>
                            </div>
        </div>
    </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div className="card card-scroll">
            <div className="card-body">  
                <h6 className="card-subtitle mb-2">Scheduled </h6>            
                
                <p className="card-text">Vishal 123 test test Al Quasis 2 Dubai Dubai United Arab Emirates</p>
                <p className="mb-0">Phone Number: +971 56565648383</p>
                <p className="mb-1">Email ID: </p>
                <a href="#" className="card-link">Edit</a>|
                <a href="#" data="558" className="card-link delete-data">Remove</a>
                                <a href="#;" data="558" className="card-link set_default">| Set as Default </a>
                            </div>
        </div>
    </div>
        
        
    
</div>


    </div>
</section>

  )
}

export default manageaddress
