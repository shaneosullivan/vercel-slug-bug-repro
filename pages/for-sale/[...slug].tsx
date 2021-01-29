import { NextPageContext } from "next";

interface Props {
  path: string;
  slug: Array<string>;
}

function SlugPage(props: Props) {
  return (
    <div>
      <div>
        This is the <strong>for-sale</strong> slug
      </div>
      <div>Path is {props.path}</div>
      <div>
        Slug is <pre>{JSON.stringify(props.slug, null, 2)}</pre>
      </div>
    </div>
  );
}

SlugPage.getInitialProps = function(context: NextPageContext) {
  return {
    path: context.asPath,
    slug: context.query.slug || [],
  };
};

export default SlugPage;
