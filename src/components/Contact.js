const Contact = () => {
  return (
    <>
      <div className="ml-[500px]">
        <div className="Personal-details">
          <h1 className="font-bold text-2xl pl-14">Get In Touch</h1>
          <h3 className="mt-2"> Phone: +91 63353788107</h3>
          <h3 className="mt-2"> Email: mahalekalpesh101299@gmail.com </h3>
          <h3 className="mt-2">
            {" "}
            Address: A-243, Millenium park,Dindoli,Surat
          </h3>
        </div>
        <div className="mt-2">
          <form className="form">
            <input className="mt-2 border-4" placeholder="Your-Name"></input>
            <br></br>
            <input className="mt-2 border-4" placeholder="Your-Email"></input>
            <br></br>
            <input
              className="mt-2 border-4"
              placeholder="Your-Phone"
              type="number"
            ></input>{" "}
            <br></br>
            <input
              className="mt-2 border-4"
              placeholder="Your-Message"
              size="100px"
            ></input>
            <br></br>
            <button className="mt-2 border-2 border-black bg-slate-100 rounded-md">
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
