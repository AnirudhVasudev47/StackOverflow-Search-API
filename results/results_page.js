import React, {useEffect, useState} from 'react';
import {View, FlatList} from "react-native";
import ListLayout from "./list/list_layout";

function ResultsPage(props) {

  const url = 'https://api.stackexchange.com';

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url + '/2.3/search/advanced?page=1&pagesize=10&order=desc&sort=activity&title='+ props.title +'&site=stackoverflow');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}) => {
    return(
      <ListLayout
        key = {item.question_id.toString()}
        score = {item.score}
        answer_count = {item.answer_count}
        title = {item.title}
        tags = {item.tags}
        time = {item.last_activity_date}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={data.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.question_id.toString()}
      />
    </View>
  );
}

export default ResultsPage;

/*
  const data = {
    items: [
      {
        tags: [
          "javascript",
          "reactjs",
          "string"
        ],
        owner: {
          account_id: 22553687,
          reputation: 1,
          user_id: 16742426,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AATXAJzBc1tE9nWHznPY7PgDxrxKO7EhJbBjsmzyqK0I=k-s128",
          display_name: "Sachin RS",
          link: "https://stackoverflow.com/users/16742426/sachin-rs"
        },
        is_answered: false,
        view_count: 52,
        closed_date: 1629816594,
        answer_count: 0,
        score: 0,
        last_activity_date: 1629817798,
        creation_date: 1629816072,
        last_edit_date: 1629817798,
        question_id: 68909311,
        link: "https://stackoverflow.com/questions/68909311/how-to-pass-backslash-forwardslash-as-a-string-in-js",
        closed_reason: "Not suitable for this site",
        title: "how to pass `\\/`(backslash forwardslash) as a string in js"
      },
      {
        tags: [
          "javascript",
          "css",
          "truncate"
        ],
        owner: {
          account_id: 21888828,
          reputation: 5,
          user_id: 16176128,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a-/AOh14Gg5wiHdUL3sfbhBe4ERu5YwIYxTQudczcWSDBpS=k-s128",
          display_name: "Aayush Swodari",
          link: "https://stackoverflow.com/users/16176128/aayush-swodari"
        },
        is_answered: true,
        view_count: 26,
        accepted_answer_id: 68449323,
        answer_count: 1,
        score: 0,
        last_activity_date: 1626752798,
        creation_date: 1626750118,
        last_edit_date: 1626751895,
        question_id: 68449086,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/68449086/text-is-overflowed-even-i-use-substring-to-truncate-the-string-in-js",
        title: "Text is overflowed even i use substring to truncate the string in JS"
      },
      {
        tags: [
          "javascript",
          "regex"
        ],
        owner: {
          account_id: 21622735,
          reputation: 23,
          user_id: 16179587,
          user_type: "registered",
          profile_image: "https://lh3.googleusercontent.com/a/AATXAJyJfIm-j5Mk4cq4G7Q2qFe8aulEhDrvIDq8FB1K=k-s128",
          display_name: "UofF",
          link: "https://stackoverflow.com/users/16179587/uoff"
        },
        is_answered: true,
        view_count: 60,
        accepted_answer_id: 68351094,
        answer_count: 3,
        score: 1,
        last_activity_date: 1626109064,
        creation_date: 1626108182,
        last_edit_date: 1626108477,
        question_id: 68351048,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/68351048/split-string-in-js-by-multiple-letters",
        title: "split string in JS by multiple letters"
      },
      {
        tags: [
          "javascript",
          "regex"
        ],
        owner: {
          account_id: 15053239,
          reputation: 3204,
          user_id: 10864356,
          user_type: "registered",
          profile_image: "https://www.gravatar.com/avatar/315465d723d17533b95c0615fd7201cc?s=128&d=identicon&r=PG&f=1",
          display_name: "gkeenley",
          link: "https://stackoverflow.com/users/10864356/gkeenley"
        },
        is_answered: false,
        view_count: 32,
        answer_count: 3,
        score: -2,
        last_activity_date: 1625463293,
        creation_date: 1625458331,
        question_id: 68250650,
        content_license: "CC BY-SA 4.0",
        link: "https://stackoverflow.com/questions/68250650/how-to-remove-bracketed-term-from-string-in-js",
        title: "How to remove bracketed term from string in JS?"
      }
    ],
    has_more: true,
    quota_max: 10000,
    quota_remaining: 9995
  };
 */