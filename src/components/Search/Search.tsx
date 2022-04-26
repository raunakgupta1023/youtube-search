import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { SuggestionList } from "../../Models/SuggestionList";
import SearchStyles from "../Search/Search.module.css";

const Search = () => {
  const [seachText, setSeachText] = useState<string>("");
  const [suggestionList, setSuggestionList] = useState<SuggestionList[]>([]);
  const [error, setError] = useState<string>("");
  const url: string =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB8tNhDx-QmjQIiCBLyWSX5mP1GIIIP4gI&type=video&q=";

  useEffect(() => {
    if (seachText !== "") {
      fetch(url + seachText).then((resp) =>
        resp
          .json()
          .then((resp) => {
            if (!resp?.error) {
              setSuggestionList(resp.items);
              setError("");
            } else {
              setError(resp?.error?.message);
              setSuggestionList([]);
            }
          })
          .catch((err) => {
            setError(err.message);
            setSuggestionList([]);
          })
      );
    } else {
      setSuggestionList([]);
    }
  }, [seachText]);

  return (
    <div className="w-100">
      <p className="h2">Please search for any Youtube content</p>
      <input
        className="w-100"
        value={seachText}
        onChange={(e) => setSeachText(e.target.value)}
      />
      <div
        className={
          suggestionList?.length > 0
            ? SearchStyles.suggestion_list
            : SearchStyles.suggestion_list_error
        }
      >
        {suggestionList?.map((sug) => (
          <Item sug={sug} />
        ))}
        {error?.length > 0 ? <span className="error">{error}</span> : ""}
      </div>
    </div>
  );
};

export default Search;
