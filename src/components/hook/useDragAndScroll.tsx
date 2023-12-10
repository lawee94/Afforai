import React, { RefObject, useCallback, useRef, useState } from "react";
import { debounce } from "lodash";

export type MarqueeData = {
  imgLink: string;
  name: string;
  title: string;
};

export const useDragAndScroll = ({
  ref,
  data,
}: {
  data: Array<MarqueeData>;
  ref: RefObject<HTMLDivElement>;
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [testimonials, setTestimonials] = useState(data);

  const handleInfiniteScroll = useCallback(
    (e: any) => {
      const cn = e.target.className;
      const isItem = cn.includes("item-600") || cn.includes("testimonial-text");
      isItem && setTestimonials((prev) => [...prev, ...data]);
    },
    [setTestimonials, data],
  );

  const handleScroll = debounce(handleInfiniteScroll, 400);

  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const handleDragStart = (
    event: React.SyntheticEvent<HTMLElement> | MouseEvent,
  ) => {
    const e = event as MouseEvent;
    if (!ref.current) return;
    const slider = ref.current.children[0] as HTMLDivElement;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ref.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (
    event: React.SyntheticEvent<HTMLElement> | MouseEvent,
  ) => {
    const e = event as MouseEvent;
    if (!isMouseDown || !ref.current) return;
    e.preventDefault();
    const slider = ref.current.children[0] as HTMLDivElement;
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return {
    testimonials,
    handleDrag,
    handleDragEnd,
    handleDragStart,
    handleScroll,
  };
};
