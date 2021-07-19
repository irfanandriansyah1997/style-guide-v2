import { FC } from 'react';

import Text from '@/atomic/text';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import {
  STYLE_GUIDE_FONT_SIZE,
  STYLE_GUIDE_LINE_HEIGHT
} from '@/constant/typography';

/**
 * Sample Content Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const SampleContent: FC = () => (
  <div style={{ padding: `10px 0` }}>
    <Text
      tag="p"
      fontSize={STYLE_GUIDE_FONT_SIZE[`paragraph-1`]}
      lineHeight={STYLE_GUIDE_LINE_HEIGHT[`paragraph-1`]}
      color={STYLE_GUIDE_COLOR.dark400}
    >
      In hac habitasse platea dictumst. Quisque tristique erat ante, vitae
      cursus quam molestie non. Etiam hendrerit elit at maximus venenatis.
      Vivamus aliquam risus ante. Phasellus in mauris mollis, aliquam libero
      gravida, vulputate eros. Fusce vel malesuada eros. Quisque in volutpat
      odio. Phasellus condimentum, erat vitae congue condimentum, nislodio
      rutrum ipsum, quis cursus risus diam vitae augue. Aliquam aliquet mauris a
      ipsum sagittis consectetur. Maecenas orci mauris, rhoncus at libero
      pretium, finibus pulvinar est. Duis volutpat purus odio.
    </Text>
    <Text
      tag="p"
      fontSize={STYLE_GUIDE_FONT_SIZE[`paragraph-1`]}
      lineHeight={STYLE_GUIDE_LINE_HEIGHT[`paragraph-1`]}
      color={STYLE_GUIDE_COLOR.dark400}
    >
      Cras hendrerit vitae ante nec malesuada. Aenean ornare egestas felis.
      Nulla facilisi. Morbi malesuada libero at libero commodo mattis quis sed
      sem. Sed vel porttitor risus. In venenatis metus ipsum, ac mollis sem
      porta in. Donec scelerisque, metus ac imperdiet euismod, urna urna
      bibendum libero, mollis semper erat neque quis justo. Sed quis diam in
      eros facilisis facilisis at non elit. Fusce efficitur urna at sem luctus,
      egestas condimentum nunc feugiat. Sed feugiat nibh ac dapibus eleifend.
      Aenean efficitur, sem et interdum hendrerit, erat nisi accumsan mauris,
      sed viverra quam tellus ac purus.
    </Text>
  </div>
);

/**
 * Sample Toggle Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.18
 */
export const SampleToggle: FC = ({ children }) => (
  <div className="">
    <Text.H5
      fontSize={STYLE_GUIDE_FONT_SIZE[`headline-5`]}
      lineHeight={STYLE_GUIDE_LINE_HEIGHT[`headline-5`]}
      fontWeight={700}
      color={STYLE_GUIDE_COLOR.dark500}
    >
      {children}
    </Text.H5>
  </div>
);
