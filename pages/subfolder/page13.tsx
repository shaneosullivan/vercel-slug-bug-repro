function IndexPage() {
  return (
    <div>
      <div>
        This is an example NextJS repo for testing a build bug with slug pages
        on Vercel
      </div>
      <div>Some links to try</div>
      <div>
        <a href="/for-sale/foo">Link 1</a> is a one level deep link with a multi
        level slug
      </div>
      <div>
        <a href="/for-sale/foo/bar/baz">Link 2</a> is a three level deep link
        with a multi level slug
      </div>
      <div>
        <a href="/foo/bar/baz">Link 3</a> is a three level deep link with a from
        the root slug
      </div>
    </div>
  );
}

export default IndexPage;
