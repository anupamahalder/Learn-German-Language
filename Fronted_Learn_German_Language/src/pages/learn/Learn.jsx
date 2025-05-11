import { useEffect, useState } from "react";
import words from "../../api/words/allCategoriesWords.json";

export const Learn = () =>{

    return (
        <div>
        {words.map(category => (
            <div key={category.categories}>
            <h2 className="text-red-500">{category.categories}</h2>
            <ul>
                {category.words.map((word, index) => (
                <li key={index}>
                    <strong>{word.article} {word.singular} 
                        <span className="text-blue-500"> ({word.pronunciation.singular.english_script})</span>
                        </strong> — {word.meanings.english}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
};

export default Learn;