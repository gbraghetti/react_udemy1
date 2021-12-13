import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    //const { debug } = render(<PostCard {...props} />);
    render(<PostCard {...props} />);

    //debug(); // dá pra rodar um debug do test. Que legal! Mas é preciso atribuiur o retorno do render a variável debug;
    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute(
      "src",
      "img/img.png",
    );

    // é possível passar ao invés de "img/img.png" usar props.cover, porém se alterar o mock, o test vai passar. Seria esse o correto?
    expect(
      screen.getByRole("heading", { name: "title 1 1" }),
    ).toBeInTheDocument();

    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
