import { FormEvent, useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'react-markdown';
import Swal from 'sweetalert2';
import './Publisher.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper/modules';

function Publishers() {
    let [text, setText] = useState<string>("");
    let [items, setItems] = useState<string[]>([]);

    return (
        <>
            <div className='background'>
                <img src="https://blog-cdn.reedsy.com/directories/admin/featured_image/600/large_what-is-a-vanity-press-371b39.jpg" alt="" />
            </div>
            <div className='profile'>
                <img src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944" alt="" />
                <div className="description">
                   <h1>Publisher</h1>
                   <p>When people think of publishing they usually think of an editor poring over a manuscript, writing notes to the author in the margin. But, while that's true to some degree, the publisher's role (and indeed, that of the editor) is much broader and much more intensive. From the start of the process to the very end, a publisher invests a huge amount of time, money and expertise in ensuring that each book is the very best it can be. And everything is done with the intention of getting authors' brilliant work into the hands of as many readers as possible.</p>
                   <button >Subscribe</button>
                </div>
            </div>

            <h3>Create Blog</h3>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setItems([...items, text]);
                setText("");
            }}>
                <MarkdownEditor
                    value={text}
                    onChange={(value) => {
                        setText(value);
                    }}
                />
                <button type='submit' onClick={() => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "New blog added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }}>
                    Add
                </button>
            </form>
            <hr />
            {
                items.map((item, idx) => {
                    return <Markdown key={idx}>{item}</Markdown>;
                })
            }
            {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper> */}
        </>
    )
}

export default Publishers;
