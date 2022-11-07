import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SocialLinkCreateManyInput } from './social-link-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySocialLinkArgs {

    @Field(() => [SocialLinkCreateManyInput], {nullable:false})
    @Type(() => SocialLinkCreateManyInput)
    data!: Array<SocialLinkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
