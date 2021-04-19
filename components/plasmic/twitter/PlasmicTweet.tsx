// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: grDXQqwN7zUznhxKcf4KuW
// Component: UM_jW14L72Q3H
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
import Avatar from "../../Avatar"; // plasmic-import: 7oNq9AP0asEpA/component
import ActionButton from "../../ActionButton"; // plasmic-import: _9YrkpjGXJEK5/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css"; // plasmic-import: grDXQqwN7zUznhxKcf4KuW/projectcss
import * as sty from "./PlasmicTweet.module.css"; // plasmic-import: UM_jW14L72Q3H/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 5WUOGCkNi4JX1z/icon
import ReplyIcon from "./icons/PlasmicIcon__Reply"; // plasmic-import: E76nkEiJYAZ1J4/icon
import RetweetIcon from "./icons/PlasmicIcon__Retweet"; // plasmic-import: vXl8PNKzUViygc/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: w5_ys0Bj8uNeTh/icon
import ShareIcon from "./icons/PlasmicIcon__Share"; // plasmic-import: 70lNoH3xWv4Hxv/icon

export type PlasmicTweet__VariantMembers = {
  options: "hasReplies";
};

export type PlasmicTweet__VariantsArgs = {
  options?: SingleChoiceArg<"hasReplies">;
};

type VariantPropType = keyof PlasmicTweet__VariantsArgs;
export const PlasmicTweet__VariantProps = new Array<VariantPropType>("options");

export type PlasmicTweet__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTweet__ArgsType;
export const PlasmicTweet__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3"
);

export type PlasmicTweet__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  img?: p.Flex<"img">;
};

export interface DefaultTweetProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  options?: SingleChoiceArg<"hasReplies">;
  className?: string;
}

function PlasmicTweet__RenderFunc(props: {
  variants: PlasmicTweet__VariantsArgs;
  args: PlasmicTweet__ArgsType;
  overrides: PlasmicTweet__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__nuejN)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__qt71K)}
        >
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            className={classNames("__wab_instance", sty.avatar)}
          >
            <p.PlasmicSlot
              defaultContents={
                <img
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(defaultcss.img, sty.img)}
                  role={"img"}
                  src={"/plasmic/twitter/images/image3.png"}
                />
              }
              value={args.slot3}
            />
          </Avatar>

          {(hasVariant(variants, "options", "hasReplies") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.box__gwDeu, {
                [sty.box__options_hasReplies__gwDeuP5LPd]: hasVariant(
                  variants,
                  "options",
                  "hasReplies"
                )
              })}
            />
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__wcDq)}
      >
        <div className={classNames(defaultcss.all, sty.box__bwy6W)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__sNuSj)}
          >
            <div className={classNames(defaultcss.all, sty.box__jm4OA)}>
              <div className={classNames(defaultcss.all, sty.box__uIlY)}>
                <p.PlasmicSlot
                  defaultContents={"Dan Abramov"}
                  value={args.children}
                  className={classNames(sty.slotChildren)}
                />
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__w3Na)}>
              <p.PlasmicSlot
                defaultContents={"@dan_abramov"}
                value={args.slot}
                className={classNames(sty.slotSlot)}
              />
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__dp8Ho
              )}
            >
              {"·"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__wlCnC
              )}
            >
              {"9h"}
            </div>
          </p.Stack>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__mFQm1)}
            slot={"25"}
          >
            <IconIcon
              className={classNames(defaultcss.all, sty.svg__rD7S)}
              role={"img"}
            />
          </ActionButton>
        </div>

        <div className={classNames(defaultcss.all, sty.box___08XWg)}>
          <p.PlasmicSlot
            defaultContents={
              "Is anyone intentionally using multiple versions of React? (Yeah I know this is generally frowned upon but sometimes you have no other good options for legacy reasons.) I want to know how your build is set up to handle code sharing."
            }
            value={args.slot2}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__nqDym)}>
          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__f5BR)}
            options={["labeled"]}
            slot={"25"}
          >
            <ReplyIcon
              className={classNames(defaultcss.all, sty.svg__zjoKp)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__gMxId)}
            options={["labeled"]}
            slot={"25"}
          >
            <RetweetIcon
              className={classNames(defaultcss.all, sty.svg___0ZquD)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__snGz)}
            options={["labeled"]}
            slot={"25"}
          >
            <LikeIcon
              className={classNames(defaultcss.all, sty.svg__abTfh)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__szmTr)}
            slot={"25"}
          >
            <ShareIcon
              className={classNames(defaultcss.all, sty.svg__w4Kho)}
              role={"img"}
            />
          </ActionButton>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "img"],
  avatar: ["avatar", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTweet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTweet__VariantsArgs;
  args?: PlasmicTweet__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTweet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTweet__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTweet__ArgProps,
      internalVariantPropNames: PlasmicTweet__VariantProps
    });

    return PlasmicTweet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTweet";
  } else {
    func.displayName = `PlasmicTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicTweet = Object.assign(
  // Top-level PlasmicTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicTweet
    internalVariantProps: PlasmicTweet__VariantProps,
    internalArgProps: PlasmicTweet__ArgProps
  }
);

export default PlasmicTweet;
/* prettier-ignore-end */
