import React, { useEffect, useRef } from "react";
import "./Pinboard.css";

const items = [
  "3D Modeling",
  "Interaction Design",
  "User Research",
  "Branding",
  "Prototyping",
  "UI Design",
  "Art Direction",
  "Illustration",
  "Wireframing",
  "Visual Design",
  "Ball1",
  "Ball2",
  "Ball3",
  "Ball4"
];

export default function Pinboard() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const positions = useRef([]);
  const velocities = useRef([]);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Initialize positions and velocities
    positions.current = items.map(() => ({
      x: Math.random() * (rect.width - 50),
      y: Math.random() * -500
    }));
    velocities.current = items.map(() => ({ x: 0, y: 0 }));

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    container.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      const rect = container.getBoundingClientRect();

      positions.current.forEach((pos, idx) => {
        const vel = velocities.current[idx];
        const el = itemRefs.current[idx];
        if (!el) return;

        const width = el.offsetWidth;
        const height = el.offsetHeight;

        // Gravity (same for all items)
        vel.y += 0.15;

        // Cursor repulsion
        const dx = pos.x + width / 2 - mousePos.current.x;
        const dy = pos.y + height / 2 - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        if (dist < repelRadius) {
          const force = ((repelRadius - dist) / repelRadius) * 4; // same force for all
          vel.x += (dx / dist) * force;
          vel.y += (dy / dist) * force;
        }

        // Apply velocity
        pos.x += vel.x;
        pos.y += vel.y;

        // Wall collision
        if (pos.x < 0) { pos.x = 0; vel.x *= -0.5; }
        if (pos.x + width > rect.width) { pos.x = rect.width - width; vel.x *= -0.5; }

        // Floor collision
        if (pos.y + height > rect.height) {
          pos.y = rect.height - height;
          vel.y = 0; // all items stop on the floor
        }

        // Item-to-item collision (stacking)
        positions.current.forEach((otherPos, otherIdx) => {
          if (otherIdx === idx) return;
          const otherEl = itemRefs.current[otherIdx];
          if (!otherEl) return;

          const otherWidth = otherEl.offsetWidth;
          const otherHeight = otherEl.offsetHeight;

          const horizontalOverlap = pos.x < otherPos.x + otherWidth && pos.x + width > otherPos.x;
          const verticalDistance = pos.y + height - otherPos.y;

          if (horizontalOverlap && verticalDistance > 0 && verticalDistance < height) {
            pos.y = otherPos.y - height;
            vel.y = 0;
          }
        });

        // Friction
        vel.x *= 0.9;
        vel.y *= 0.9;

        // Apply transform
        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="board-container" ref={containerRef}>
      {items.map((item, idx) => {
        const isBall = item.toLowerCase().includes("ball");
        return (
          <div
            key={idx}
            ref={el => itemRefs.current[idx] = el}
            className={isBall ? "item ball" : `item word tag-${idx % 4}`}
          >
            {!isBall && item}
          </div>
        );
      })}
    </div>
  );
}
