import Image from "next/image";
import "../../app/components/blog.css"
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";




function Blog(){
    return(
        <main className="blog-container">
             <div className="blog-container2">
                 {/* top div */}
              <div className="blog-header-box">
                <h1 className="blog-title">Our Services</h1>
                <p className="blog-des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam quidem ipsam cupiditate dolore iusto quos aspernatur ullam hic similique repudiandae dignissimos architecto nesciunt, eos perferendis ipsum dolorum aliquid sit.</p>
              </div>
              {/* boxes div */}
              <div className="blog-box-container">
              <div className="blog-box">
                <Image src={"/g6.jpg"}
                width={100}
                height={100}
                className="blog-images"
                alt="blogimages"></Image>
                <h2 className="web-heading">Here are some varieties</h2>
                <p className="web-title">Lorem ipsum dolo ipsam labore! Unde ipsam nihil debitis fugiat, mollitia voluptates, tempora suscipit doloremque illo laborum laboriosam reiciendis corporis repudiandae?</p>
                </div>
              
              <div className="blog-box">
                <Image src={"/g1.jpeg"}
                width={100}
                height={100}
                className="blog-images"
                alt="blogimages"></Image>
                <h2 className="web-heading">Here are some varieties</h2>
                <p className="web-title">Lorem ipsum dolor sit amet consectetur illum eius in, dolor repudiandae vel quo expedita iusto vitae temporibus corporis nobis veniam. Harum, ullam fugiat..</p>
               </div>
                             
              <div className="blog-box">
                <Image src={"/g3.jpg"}
                width={100}
                height={100}
                className="blog-images"
                alt="blogimages"></Image>
                <h2 className="web-heading">Here are some varieties</h2>
                <p className="web-title AI">Lorem ipsum dol doloremque pariatur itaque, dicta eveniet eligendi reiciendis adipisci odio libero? Dignissimos, ad autem omnis dolorem voluptatem repellat eligendi aut ea..</p>
                
              </div>
                
                    
              </div>
             </div>
        </main>
    )
}
export default Blog