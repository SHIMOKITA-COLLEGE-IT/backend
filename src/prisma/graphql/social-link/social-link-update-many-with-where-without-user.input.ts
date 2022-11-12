import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SocialLinkScalarWhereInput } from './social-link-scalar-where.input';
import { Type } from 'class-transformer';
import { SocialLinkUpdateManyMutationInput } from './social-link-update-many-mutation.input';

@InputType()
export class SocialLinkUpdateManyWithWhereWithoutUserInput {

    @Field(() => SocialLinkScalarWhereInput, {nullable:false})
    @Type(() => SocialLinkScalarWhereInput)
    where!: SocialLinkScalarWhereInput;

    @Field(() => SocialLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => SocialLinkUpdateManyMutationInput)
    data!: SocialLinkUpdateManyMutationInput;
}
