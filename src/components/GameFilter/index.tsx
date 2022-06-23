import React, { ChangeEvent } from "react";
import { PLATFORMS, GENRES, TAGS, SORT_BY } from "./constant";
import { Form, Label, Select } from "./styles";
interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}
const GameFilter = ({ onChange }: Props) => {
  return (
    <Form onChange={onChange}>
      <Label htmlFor="platform-select">
        Platform:
        <Select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="genre-select">
        Genre:
        <select name="genre" id="genre-select">
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </select>
      </Label>

      <Label htmlFor="tag-select">
        Tag:
        <Select name="tag" id="tag-select">
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="sort-select">
        Sort by:
        <Select name="sort" id="sort-select">
          {SORT_BY.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.display}
            </option>
          ))}
        </Select>
      </Label>
    </Form>
  );
};

export default GameFilter;
