import React from "react";
import appStyles from "../../styles/appStyles";

export const BlogTitleComponent = () => {
    return (
        <div className="flex flex-col p-5 gap-3">
            <h1 className={appStyles.title}>BLOG MONDIAL</h1>
        </div>
    );
};