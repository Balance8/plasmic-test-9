// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: grDXQqwN7zUznhxKcf4KuW
// Component: Tscjfk6rFM1ct
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ActionButton from "../../ActionButton"; // plasmic-import: _9YrkpjGXJEK5/component
import Spacer from "../../Spacer"; // plasmic-import: IUKZRu0kHdsES/component
import Avatar from "../../Avatar"; // plasmic-import: 7oNq9AP0asEpA/component
import Button from "../../Button"; // plasmic-import: VflPTLh_z3J5xy/component
import Tweet from "../../Tweet"; // plasmic-import: UM_jW14L72Q3H/component
import SideSection from "../../SideSection"; // plasmic-import: N7LBgtAWTEMkNx/component
import Trend from "../../Trend"; // plasmic-import: 7DZSrmqrTbCqfP/component
import Suggestion from "../../Suggestion"; // plasmic-import: NyO9pztKZARDxS/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: glytwgdhLxHwNu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css"; // plasmic-import: grDXQqwN7zUznhxKcf4KuW/projectcss
import * as sty from "./PlasmicFeed.module.css"; // plasmic-import: Tscjfk6rFM1ct/css

import MagicIcon from "./icons/PlasmicIcon__Magic"; // plasmic-import: r_SYtmlVnIMV4V/icon
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: i1NHCRRi33DLYD/icon
import HomeActiveIcon from "./icons/PlasmicIcon__HomeActive"; // plasmic-import: p2Q67b3CQF1hFj/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: P1whiCZujPZNSW/icon
import NotificationsIcon from "./icons/PlasmicIcon__Notifications"; // plasmic-import: zEExotwG3r6q2G/icon
import MessagesIcon from "./icons/PlasmicIcon__Messages"; // plasmic-import: mwZXcSLTF2NHVT/icon
import BookmarksIcon from "./icons/PlasmicIcon__Bookmarks"; // plasmic-import: 7wfwrkNPH8W5Fy/icon
import ListsIcon from "./icons/PlasmicIcon__Lists"; // plasmic-import: spvC7UWcBhFpDE/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: r3NfVXX1lhe-lR/icon
import MoreIcon from "./icons/PlasmicIcon__More"; // plasmic-import: vsALOop90yBUp6/icon
import PictureIcon from "./icons/PlasmicIcon__Picture"; // plasmic-import: I3xeDYJtP-KRaB/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: twwdSWoTU6-qHT/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: E-eZ2sRVy9DN57/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: XQ37PpMH0v9_Kh/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: 14Hn10IEVwb02W/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: CN7N4u7sX7xBkQ/icon

export type PlasmicFeed__VariantMembers = {};

export type PlasmicFeed__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeed__VariantsArgs;
export const PlasmicFeed__VariantProps = new Array<VariantPropType>();

export type PlasmicFeed__ArgsType = {};
type ArgPropType = keyof PlasmicFeed__ArgsType;
export const PlasmicFeed__ArgProps = new Array<ArgPropType>();

export type PlasmicFeed__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<"input">;
};

export interface DefaultFeedProps {
  className?: string;
}

function PlasmicFeed__RenderFunc(props: {
  variants: PlasmicFeed__VariantsArgs;
  args: PlasmicFeed__ArgsType;
  overrides: PlasmicFeed__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
      </Head>

      <div className={defaultcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={
            hasVariant(globalVariants, "screen", "desktop") ? true : false
          }
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.box__wQj59)}>
            {(
              hasVariant(globalVariants, "screen", "desktop") ? false : true
            ) ? (
              <div className={classNames(defaultcss.all, sty.box__j3If9)}>
                <div className={classNames(defaultcss.all, sty.box__v8BsC)}>
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__gFcsr)}
                    role={"img"}
                    src={"/plasmic/twitter/images/image2.png"}
                  />
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___1K2Zg
                  )}
                >
                  {"Home"}
                </div>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__iYaLd
                  )}
                  options={["medium", "primary"]}
                  slot={"25"}
                >
                  <MagicIcon
                    className={classNames(defaultcss.all, sty.svg__mvBh0)}
                    role={"img"}
                  />
                </ActionButton>
              </div>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "desktop") ? true : false
            ) ? (
              <div className={classNames(defaultcss.all, sty.box__aDixO)}>
                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__u5EP8
                  )}
                  options={["primary", "large"]}
                  slot={"25"}
                >
                  <TwitterIcon
                    className={classNames(defaultcss.all, sty.svg___4N9Mz)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__wK7Bw
                  )}
                  options={["primary", "large"]}
                  slot={"25"}
                >
                  <HomeActiveIcon
                    className={classNames(defaultcss.all, sty.svg___9Wj4R)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton___0Zzyv
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <Icon2Icon
                    className={classNames(defaultcss.all, sty.svg__ylKb)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__jlt85
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <NotificationsIcon
                    className={classNames(defaultcss.all, sty.svg__rnHAd)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton___0Ngyb
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <MessagesIcon
                    className={classNames(defaultcss.all, sty.svg___5T1Cv)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__hkZ0S
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <BookmarksIcon
                    className={classNames(defaultcss.all, sty.svg__tNtBg)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__rC88
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <ListsIcon
                    className={classNames(defaultcss.all, sty.svg___648Gr)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton___03Jbd
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <ProfileIcon
                    className={classNames(defaultcss.all, sty.svg__eV7TR)}
                    role={"img"}
                  />
                </ActionButton>

                <ActionButton
                  className={classNames(
                    "__wab_instance",
                    sty.actionButton__f4Mol
                  )}
                  options={["large"]}
                  slot={"25"}
                >
                  <MoreIcon
                    className={classNames(defaultcss.all, sty.svg__duMy4)}
                    role={"img"}
                  />
                </ActionButton>
              </div>
            ) : null}
          </div>

          <div className={classNames(defaultcss.all, sty.box___9BKyY)}>
            {(
              hasVariant(globalVariants, "screen", "desktop") ? true : false
            ) ? (
              <div className={classNames(defaultcss.all, sty.box__sAh6)}>
                <div className={classNames(defaultcss.all, sty.box__w68Bb)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__mPYw
                    )}
                  >
                    {"Home"}
                  </div>

                  <Spacer
                    className={classNames("__wab_instance", sty.spacer___0Pp8K)}
                  />

                  <ActionButton
                    className={classNames(
                      "__wab_instance",
                      sty.actionButton__fnzv1
                    )}
                    options={["medium", "primary"]}
                    slot={"25"}
                  >
                    <MagicIcon
                      className={classNames(defaultcss.all, sty.svg__qt7Jr)}
                      role={"img"}
                    />
                  </ActionButton>
                </div>

                <div className={classNames(defaultcss.all, sty.box__rmB1B)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__kHdkL)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__oe6Hr)}
                    >
                      <Avatar
                        data-plasmic-name={"avatar"}
                        data-plasmic-override={overrides.avatar}
                        className={classNames("__wab_instance", sty.avatar)}
                      />
                    </p.Stack>
                  </p.Stack>

                  <div className={classNames(defaultcss.all, sty.box__gimo)}>
                    <textarea
                      data-plasmic-name={"textarea"}
                      data-plasmic-override={overrides.textarea}
                      className={classNames(defaultcss.textarea, sty.textarea)}
                      placeholder={"What's happening?" as const}
                      rows={1 as const}
                    />

                    <div className={classNames(defaultcss.all, sty.box__yMpMd)}>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(defaultcss.all, sty.box__lptGo)}
                      >
                        <ActionButton
                          className={classNames(
                            "__wab_instance",
                            sty.actionButton__tHyR
                          )}
                          options={["medium", "primary"]}
                          slot={"25"}
                        >
                          <PictureIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__r7SPt
                            )}
                            role={"img"}
                          />
                        </ActionButton>

                        <ActionButton
                          className={classNames(
                            "__wab_instance",
                            sty.actionButton__dk1GV
                          )}
                          options={["medium", "primary"]}
                          slot={"25"}
                        >
                          <Icon3Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg___3GPHh
                            )}
                            role={"img"}
                          />
                        </ActionButton>

                        <ActionButton
                          className={classNames(
                            "__wab_instance",
                            sty.actionButton__e5VH
                          )}
                          options={["medium", "primary"]}
                          slot={"25"}
                        >
                          <Icon4Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__w7Huq
                            )}
                            role={"img"}
                          />
                        </ActionButton>

                        <ActionButton
                          className={classNames(
                            "__wab_instance",
                            sty.actionButton__xcEZq
                          )}
                          options={["medium", "primary"]}
                          slot={"25"}
                        >
                          <Icon5Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__tvhki
                            )}
                            role={"img"}
                          />
                        </ActionButton>

                        <ActionButton
                          className={classNames(
                            "__wab_instance",
                            sty.actionButton__huWc
                          )}
                          options={["medium", "primary"]}
                          slot={"25"}
                        >
                          <Icon7Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__dzI4M
                            )}
                            role={"img"}
                          />
                        </ActionButton>
                      </p.Stack>

                      <Spacer
                        className={classNames(
                          "__wab_instance",
                          sty.spacer__s0S7V
                        )}
                      />

                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        options={["primary"]}
                      >
                        {"Tweet"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className={classNames(defaultcss.all, sty.box__nrSQ)}>
              <Tweet
                className={classNames("__wab_instance", sty.tweet__kQkQh)}
              />

              <Tweet
                className={classNames("__wab_instance", sty.tweet__jrPa)}
                slot={"@cassidoo"}
                slot2={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__akpFt)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__ylRiM
                      )}
                    >
                      {"A new issue is coming your way, check your inbox!!"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__eio96)}
                    >
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__e66B)}
                        role={"img"}
                        src={"/plasmic/twitter/images/image5.png"}
                      />

                      <div
                        className={classNames(defaultcss.all, sty.box__vwW8V)}
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__teD6
                          )}
                        >
                          <span>
                            <span style={{ fontWeight: 700 }}>
                              {"rendezvous with cassidoo"}
                            </span>
                          </span>
                        </div>

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__oTnTe
                          )}
                        >
                          {"probably the best newsletter you'll ever read"}
                        </div>

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box___8HwWh
                          )}
                        >
                          {"cassidoo.co"}
                        </div>
                      </div>
                    </p.Stack>
                  </p.Stack>
                }
                slot3={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__wmH4H)}
                    role={"img"}
                    src={"/plasmic/twitter/images/image4.png"}
                  />
                }
              >
                {"Cassidy Williams"}
              </Tweet>

              <Tweet
                className={classNames("__wab_instance", sty.tweet__mYu9Q)}
                slot={"@mxstbr"}
                slot2={
                  "Tell me you're a React developer without telling me you're a React developer."
                }
                slot3={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__uu1MC)}
                    role={"img"}
                    src={"/plasmic/twitter/images/image7.png"}
                  />
                }
              >
                {"Max Stoiber"}
              </Tweet>

              <Tweet
                className={classNames("__wab_instance", sty.tweet__ckMVy)}
              />

              <Tweet
                className={classNames("__wab_instance", sty.tweet__gWsI4)}
                slot={"@cassidoo"}
                slot2={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__qOvd)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__r66ZX
                      )}
                    >
                      {"A new issue is coming your way, check your inbox!!"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box___1IfLf)}
                    >
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__bIrNh)}
                        role={"img"}
                        src={"/plasmic/twitter/images/image5.png"}
                      />

                      <div
                        className={classNames(defaultcss.all, sty.box__ruTm)}
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__f3NEm
                          )}
                        >
                          <span>
                            <span style={{ fontWeight: 700 }}>
                              {"rendezvous with cassidoo"}
                            </span>
                          </span>
                        </div>

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box___0Ku1
                          )}
                        >
                          {"probably the best newsletter you'll ever read"}
                        </div>

                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__qpdie
                          )}
                        >
                          {"cassidoo.co"}
                        </div>
                      </div>
                    </p.Stack>
                  </p.Stack>
                }
                slot3={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___6CVgm)}
                    role={"img"}
                    src={"/plasmic/twitter/images/image4.png"}
                  />
                }
              >
                {"Cassidy Williams"}
              </Tweet>

              <Tweet
                className={classNames("__wab_instance", sty.tweet___5Yl72)}
                slot={"@mxstbr"}
                slot2={
                  "Tell me you're a React developer without telling me you're a React developer."
                }
                slot3={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__utKHk)}
                    role={"img"}
                    src={"/plasmic/twitter/images/image7.png"}
                  />
                }
              >
                {"Max Stoiber"}
              </Tweet>
            </div>
          </div>

          {(hasVariant(globalVariants, "screen", "desktop") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box___14G)}
            >
              <div className={classNames(defaultcss.all, sty.box__nuQqw)}>
                <div className={classNames(defaultcss.all, sty.box__juyfC)}>
                  <div className={classNames(defaultcss.all, sty.box___6WCq7)}>
                    <SearchIcon
                      className={classNames(defaultcss.all, sty.svg__hiOv5)}
                      role={"img"}
                    />
                  </div>

                  <input
                    data-plasmic-name={"textbox"}
                    data-plasmic-override={overrides.textbox}
                    className={classNames(defaultcss.input, sty.textbox)}
                    placeholder={"Search Twitter" as const}
                    size={1 as const}
                    type={"text" as const}
                  />
                </div>
              </div>

              <SideSection
                className={classNames(
                  "__wab_instance",
                  sty.sideSection___5TclZ
                )}
                slot={
                  <React.Fragment>
                    <Trend
                      className={classNames("__wab_instance", sty.trend__t73YN)}
                      slot={"Entertainment"}
                    >
                      {"Adele shares photo supporting Beyonc??'s Black is King"}
                    </Trend>

                    <Trend
                      className={classNames(
                        "__wab_instance",
                        sty.trend___60R8W
                      )}
                      slot={"COVID-19"}
                    >
                      {
                        "Thousands march in Berlin to protest COVID-19 restrictions"
                      }
                    </Trend>

                    <Trend
                      className={classNames("__wab_instance", sty.trend__gEqJk)}
                      slot={"World nenws"}
                    >
                      {
                        "Russia banned from using its name, flag and anthem at the next two Olympic Games"
                      }
                    </Trend>
                  </React.Fragment>
                }
              />

              <SideSection
                className={classNames("__wab_instance", sty.sideSection__bPosb)}
                slot={
                  <React.Fragment>
                    <Suggestion
                      className={classNames(
                        "__wab_instance",
                        sty.suggestion__zx4U1
                      )}
                      slot={"Mark Dalgleish      "}
                      slot2={"@markdalgleish"}
                    >
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__aIzbs)}
                        role={"img"}
                        src={"/plasmic/twitter/images/image6.png"}
                      />
                    </Suggestion>

                    <Suggestion
                      className={classNames(
                        "__wab_instance",
                        sty.suggestion___85FK6
                      )}
                      slot={"Guillermo Rauch  "}
                      slot2={"@rauchg"}
                    >
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img___5TjrD)}
                        role={"img"}
                        src={"/plasmic/twitter/images/image8.png"}
                      />
                    </Suggestion>
                  </React.Fragment>
                }
              >
                {"Who to follow"}
              </SideSection>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__l2AbC)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__pqTig)}
                >
                  <p.PlasmicLink
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.link__mh3Fw
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"Terms"}
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.link__bHeYa
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"Privacy policy"}
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.link__hbr41
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"Cookies"}
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.link___8ZMk5
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"Ads info"}
                  </p.PlasmicLink>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__zFhi)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__foyu4
                    )}
                  >
                    {"?? 2021 Twitter, Inc."}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? false : true) ? (
            <div className={classNames(defaultcss.all, sty.box___0Ih7B)}>
              <ActionButton
                className={classNames(
                  "__wab_instance",
                  sty.actionButton__vLrDb
                )}
                options={["medium", "primary"]}
                slot={"25"}
              >
                <HomeActiveIcon
                  className={classNames(defaultcss.all, sty.svg___4Riey)}
                  role={"img"}
                />
              </ActionButton>

              <ActionButton
                className={classNames(
                  "__wab_instance",
                  sty.actionButton__wagF0
                )}
                options={["medium"]}
                slot={"25"}
              >
                <SearchIcon
                  className={classNames(defaultcss.all, sty.svg__t3YXd)}
                  role={"img"}
                />
              </ActionButton>

              <ActionButton
                className={classNames(
                  "__wab_instance",
                  sty.actionButton__xEcWm
                )}
                options={["medium"]}
                slot={"25"}
              >
                <NotificationsIcon
                  className={classNames(defaultcss.all, sty.svg__rAvz4)}
                  role={"img"}
                />
              </ActionButton>

              <ActionButton
                className={classNames(
                  "__wab_instance",
                  sty.actionButton__a4Ibf
                )}
                options={["medium"]}
                slot={"25"}
              >
                <MessagesIcon
                  className={classNames(defaultcss.all, sty.svg__mqKnc)}
                  role={"img"}
                />
              </ActionButton>
            </div>
          ) : null}
          {false ? (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__ovoHu)}
              role={"img"}
              src={"/plasmic/twitter/images/image.png"}
            />
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "textarea", "button", "textbox"],
  avatar: ["avatar"],
  textarea: ["textarea"],
  button: ["button"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  textarea: "textarea";
  button: typeof Button;
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeed__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFeed__VariantsArgs;
  args?: PlasmicFeed__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFeed__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFeed__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeed__ArgProps,
      internalVariantPropNames: PlasmicFeed__VariantProps
    });

    return PlasmicFeed__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeed";
  } else {
    func.displayName = `PlasmicFeed.${nodeName}`;
  }
  return func;
}

export const PlasmicFeed = Object.assign(
  // Top-level PlasmicFeed renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicFeed
    internalVariantProps: PlasmicFeed__VariantProps,
    internalArgProps: PlasmicFeed__ArgProps
  }
);

export default PlasmicFeed;
/* prettier-ignore-end */
