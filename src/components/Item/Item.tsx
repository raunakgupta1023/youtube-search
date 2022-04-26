import React from "react";
import { SuggestionList } from "../../Models/SuggestionList";
import SearchStyles from "../Search/Search.module.css";

interface ItemProps {
  sug: SuggestionList;
}

const Item = (props: ItemProps) => {
  const { sug } = props;
  return (
    <span key={sug.id?.videoId} className="d-flex m-3">
      <img
        className={SearchStyles.suggestion_list_item_image}
        alt={sug?.snippet?.title}
        src={sug?.snippet?.thumbnails?.default?.url}
      />
      <div className="d-flex flex-column ms-1">
        <span className={SearchStyles.suggestion_title}>
          {sug?.snippet?.title?.length > 60
            ? sug.snippet.title.substring(0, 60) + "..."
            : sug?.snippet?.title}
        </span>
        <span className={SearchStyles.suggestion_desc}>
          {sug?.snippet?.title?.length > 80
            ? sug.snippet.title.substring(0, 80) + "..."
            : sug?.snippet?.title}
        </span>
      </div>
    </span>
  );
};

export default Item;
