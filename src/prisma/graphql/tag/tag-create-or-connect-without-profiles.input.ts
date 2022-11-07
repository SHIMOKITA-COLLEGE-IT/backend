import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutProfilesInput } from './tag-create-without-profiles.input';

@InputType()
export class TagCreateOrConnectWithoutProfilesInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutProfilesInput, {nullable:false})
    @Type(() => TagCreateWithoutProfilesInput)
    create!: TagCreateWithoutProfilesInput;
}
