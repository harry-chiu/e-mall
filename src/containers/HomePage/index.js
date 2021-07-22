import React from 'react';
import { NavLink } from 'react-router-dom';
import PublicBanner from 'components/PublicBanner';
import PartnerBanner from 'components/PartnerBanner';
import BlockHeader from 'components/BlockHeader';
import ProductCard from 'components/ProductCard';
import {
  Container,
  BannerBlock,
  ProductBlock,
  PopularList,
  HighlightList,
} from './style';

const HomePage = () => {
  return (
    <Container>
      <BannerBlock>
        <PublicBanner />

        <PartnerBanner />
      </BannerBlock>

      <ProductBlock>
        <BlockHeader
          title="熱門商品"
          extra={<NavLink to="/popular">去逛逛</NavLink>}
        />

        <PopularList>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </PopularList>
      </ProductBlock>

      <ProductBlock>
        <BlockHeader
          title="精選商品"
          extra={<NavLink to="/highlight">去逛逛</NavLink>}
        />

        <HighlightList>
          <ProductCard direction="horizental" />
          <ProductCard direction="horizental" />
          <ProductCard direction="horizental" />

          <ProductCard direction="horizental" />
          <ProductCard direction="horizental" />
          <ProductCard direction="horizental" />
        </HighlightList>
      </ProductBlock>
    </Container>
  );
};

export default HomePage;
