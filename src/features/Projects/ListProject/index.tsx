import Image from "next/image";
import { StackList } from "@/components/ui/icons";
import ScrollCard from "@/components/ui/scroll-card";
import type { FeaturedWork } from "@/constants/contents";

const ListProject = ({
  index,
  tone,
  company,
  role,
  period,
  title,
  stack,
  tags,
  shot,
  description,
  result,
}: FeaturedWork & { index: number }) => {
  return (
    <article className="work">
      <div className="work__meta">
        <strong>{company}</strong>
        <span className="label">{role}</span>
        <span className="label">{period}</span>
      </div>
      <ScrollCard className={tone}>
        <div className="grain" />
        <div>
          <h3>{title}</h3>
          <StackList items={stack} />
          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        {shot && (
          <figure className="card__shot">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(max-width: 820px) 100vw, 460px"
            />
          </figure>
        )}
        <span className="card__num" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <div className="card__body">
          <p>{description}</p>
          <p className="card__result">
            <span>Result</span>
            {result}
          </p>
        </div>
      </ScrollCard>
    </article>
  );
};

export default ListProject;
