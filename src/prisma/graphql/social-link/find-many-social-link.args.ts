import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkWhereInput } from './social-link-where.input';
import { Type } from 'class-transformer';
import { SocialLinkOrderByWithRelationInput } from './social-link-order-by-with-relation.input';
import { SocialLinkWhereUniqueInput } from './social-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SocialLinkScalarFieldEnum } from './social-link-scalar-field.enum';

@ArgsType()
export class FindManySocialLinkArgs {

    @Field(() => SocialLinkWhereInput, {nullable:true})
    @Type(() => SocialLinkWhereInput)
    where?: SocialLinkWhereInput;

    @Field(() => [SocialLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SocialLinkOrderByWithRelationInput>;

    @Field(() => SocialLinkWhereUniqueInput, {nullable:true})
    cursor?: SocialLinkWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SocialLinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SocialLinkScalarFieldEnum>;
}
