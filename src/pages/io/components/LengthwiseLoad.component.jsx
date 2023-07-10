import "./LengthwiseLoad.styles.scss";
import { IOImage, mediaList } from "../../../components";

export const LengthwiseLoad = () => {

  return (
    <section className="content-container co-layout lengthwise" >
      <header className="content-header lengthwise" >
        <h3 className="header-title content lengthwise" >Lengthwise</h3>
      </header>
      <section className="content lengthwise" >
        {mediaList.categories[0].videos.map((media, index) => {
          return (
            <IOImage className={`content-image ${index} lengthwise`} key={index} src={`http://storage.googleapis.com/gtv-videos-bucket/sample/${media.thumb}`} />
          )
        })}
      </section>
    </section>
  )
}