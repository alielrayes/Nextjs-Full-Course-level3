import Footer from "components/footer/footer";
import Header from "components/header/header";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Image from "next/image.js";
import AdminBtn from "./adminBtn";

async function getData(iddd) {
  const res = await fetch(`http://localhost:3000/api/getOneProduct?id=${iddd}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const objData = await getData(params.id);
  return {
    title: objData.title,
    description: objData.description,
  };
}

const Page = async ({ params }) => {
  const objData = await getData(params.id);
  console.log(objData);

  return (
    <div
      className="product-details"
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />

      <div>
        <main style={{ textAlign: "center" }} className="flex">
          <Image
            width={266}
            height={270}
            quality={100}
            alt=""
            src={`${objData.productImg}`}
          />
          <div className="product-details">
            <div style={{ justifyContent: "space-between" }} className="flex">
              <h2>{objData.title}</h2>
              <p className="price">${objData.price}</p>
            </div>
            <p className="description">{objData.description}</p>
            <button className="flex add-to-cart">
              <FontAwesomeIcon style={{ width: "1.1rem" }} icon={faCartPlus} />
              Add To Cart
            </button>
          </div>
        </main>

        <AdminBtn productId={params.id} imgPublicId={objData.imgPublicId} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
