/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { FlexBox } from "../../atoms/Boxes";
import Property from "../../atoms/Property";
import { Review1, Review2 } from "../../molecules/Review";
import { ProductTabContainer } from "./productTab.style";

const steps = ["Description", "Reviews", "Additional Information"];

export default function ProductTab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(false);

  function handleCurrentIndex(index: number) {
    if (currentIndex == index) {
      setSelected(!selected);
    } else {
      setCurrentIndex(index);
    }
  }
  return (
    <ProductTabContainer>
      <FlexBox justifyContent="space-between">
        {steps.map((step, index) => {
          return (
            <div
            className="tab-box"
              onClick={() => handleCurrentIndex(index)}
              key={index}
              style={{
                color: `${currentIndex == index ? "black" : "#A3A5AD"}`,
                borderBottom: `${currentIndex == index ? "2px solid black" : ""}`
              }}
            >
              <h3>{step}</h3>
            </div>
          );
        })}
      </FlexBox>
      <div>
        {currentIndex == 0 ? (
          <div>
            <p style={{ padding: "60px 0 20px" }}>
              The Karissa V-Neck Tee features a semi-fitted shape that's
              flattering for every figure. You can hit the gym with confidence
              while it hugs curves and hides common "problem" areas. Find
              stunning women's cocktail dresses and party dresses.
            </p>
            <FlexBox flexDirection="column" gap="20px">
              <Property name="Product code: " value="578902-00" />
              <Property name="Category: " value="Pants" />
              <Property name="Material: " value="Cotton" />
              <Property name="Country: " value="Nigeria" />
            </FlexBox>
          </div>
        ) : currentIndex == 1 ? (
          <div>
            <FlexBox
              style={{ padding: "60px 0 20px" }}
              flexDirection="column"
              gap="43px"
            >
              <Review1 />
              <Review2 />
            </FlexBox>
          </div>
        ) : (
          <div>
            <p style={{ padding: "60px 0 20px" }}>
              Brand name is the perfect pairing of quality and design. This
              label creates major everyday vibes with its collection of modern
              brooches, silver and gold jewellery, or clips it back with hair
              accessories in geo styles.
            </p>
            <br />
            <p>
              Just here for the care instructions? Yeah, we thought so Do not
              wash!
            </p>
          </div>
        )}
      </div>
    </ProductTabContainer>
  );
}
