
import '../style.css';

export default function SearchBar() {
  return (
      <form class="example" action="/action_page.php" style="margin:auto;max-width:300px">
            <input type="text" placeholder="Search.." name="search2">
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
  );
}
