import { DragdealerContainer, IOImage, mediaList } from "../../../components";
import "./ScrollAndDragdealer.styles.scss";

export const WidthwiseLoad = () => {
  return (
    <section className="content-container widthwise" >
      <header className="content-header co-layout widthwise" >
        <h3 className="header-title content widthwise" >Widthwise</h3>
      </header>
      <section className="content widthwise" >
        <article className="content-section co-layout i-0" >
          <header className="section-header" >
            <h4 className="header-title" >Overflow Scroll</h4>
          </header>
          <div className="media-list flex wrap justify-content-sb" >
            {mediaList.categories[0].videos.map((media, index) => {
              return (
                <IOImage className={`content-image ${index} widthwise`} key={index} src={`http://storage.googleapis.com/gtv-videos-bucket/sample/${media.thumb}`} />
              )
            })}
          </div>
        </article>
        <article className="content-section i-1" >
          <header className="section-header co-layout" >
            <h4 className="header-title" >Dragdealer</h4>
          </header>
          <div className="media-list dragdealer" >
            <DragdealerContainer >
              {mediaList.categories[0].videos.map((media, index) => {
                return (
                  <IOImage className={`content-image ${index} widthwise`} key={index} src={`http://storage.googleapis.com/gtv-videos-bucket/sample/${media.thumb}`} />
                )
              })}
            </DragdealerContainer>
          </div>
        </article>
      </section>
    </section>
  )
}