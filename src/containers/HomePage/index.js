import React from 'react';
import { Link } from 'react-router-dom';
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
          extra={<Link to="/popular">去逛逛</Link>}
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
          extra={<Link to="/highlight">去逛逛</Link>}
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
