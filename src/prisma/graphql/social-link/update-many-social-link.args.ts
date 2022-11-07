import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkUpdateManyMutationInput } from './social-link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SocialLinkWhereInput } from './social-link-where.input';

@ArgsType()
export class UpdateManySocialLinkArgs {

    @Field(() => SocialLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => SocialLinkUpdateManyMutationInput)
    data!: SocialLinkUpdateManyMutationInput;

    @Field(() => SocialLinkWhereInput, {nullable:true})
    @Type(() => SocialLinkWhereInput)
    where?: SocialLinkWhereInput;
}
